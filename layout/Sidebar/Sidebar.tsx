import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import styles from './Sidebar.module.css';
import cn from "classnames";
import {Menu} from "@/layout/Menu/Menu";
import Logo from '../logo.svg';
import Link from "next/link";

export const Sidebar = ({ className,  ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props} >
            <Link href={"/"}><Logo className={styles.logo}/></Link>
            <div>Поиск</div>
            <Menu />
        </div>
    );
};