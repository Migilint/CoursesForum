import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import styles from './Sidebar.module.css';
import cn from "classnames";

export const Sidebar = ({...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};