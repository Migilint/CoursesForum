import {HeaderProps} from "@/layout/Header/Header.props";
import styles from './Footer.module.css';
import cn from "classnames";


export const Footer = ({...props }: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};