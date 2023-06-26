import React, {FunctionComponent} from 'react';
import {LayoutProps} from "@/layout/Layout.props";
import styles from './Layout.module.css';
import cn from "classnames";
import {Footer} from "@/layout/Footer/Footer";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import { Header } from "@/layout/Header/Header";
import {AppContextProvider, IAppContext} from "@/context/app.context";

const Layout = ({children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}  />
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

// Что за объект Record -> https://stackoverflow.com/questions/51936369/what-is-the-record-type
export const withLayout = <T extends Record<string,unknown> & IAppContext>(Component: FunctionComponent<T>) => {
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