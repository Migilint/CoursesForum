
import styles from './Divider.module.css';
import cn from "classnames";
import {DividerProps} from "@/components/Divider/Divider.props";

export const Divider = ({className, ...props }: DividerProps): JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)} {...props}/>
    );
};