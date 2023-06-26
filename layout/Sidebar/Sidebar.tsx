import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import styles from './Sidebar.module.css';
import cn from "classnames";
import {Menu} from "@/layout/Menu/Menu";

export const Sidebar = ({...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};