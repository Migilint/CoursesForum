import React, {FunctionComponent} from 'react';
import {LayoutProps} from "@/layout/Layout.props";
import styles from './Layout.module.css';
import cn from "classnames";
import {Footer} from "@/layout/Footer/Footer";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import { Header } from "@/layout/Header/Header";

const Layout = ({children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

// Что за объект Record -> https://stackoverflow.com/questions/51936369/what-is-the-record-type
export const withLayout = <T extends Record<string,unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};