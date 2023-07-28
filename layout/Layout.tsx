import React, {FunctionComponent, useState, KeyboardEvent, useRef} from 'react';
import {LayoutProps} from "@/layout/Layout.props";
import styles from './Layout.module.css';
import cn from "classnames";
import {Footer} from "@/layout/Footer/Footer";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import {Header} from "@/layout/Header/Header";
import {AppContextProvider, IAppContext} from "@/context/app.context";
import {Up} from "@/components";

const Layout = ({children}: LayoutProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);
    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };

    return (
        <div className={styles.wrapper}>

            <a
                onFocus={() => setIsSkipLinkDisplayed(true)}
                tabIndex={0}
                className={cn(styles.skipLink, {

                    [styles.displayed]: isSkipLinkDisplayed

                })}
                onKeyDown={skipContentAction}
            >
                Сразу к содержанию
            </a>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.body} ref={bodyRef} tabIndex={0} role={"main"}>
                {children}
            </main>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
};

// Что за объект Record -> https://stackoverflow.com/questions/51936369/what-is-the-record-type
export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};