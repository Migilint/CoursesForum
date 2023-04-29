
import styles from './Ptag.module.css';
import {PtagProps} from "@/components/Ptag/Ptag.props";
import cn from "classnames";

export const Ptag = ({ size='m', children, className, ...props }: PtagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.b]: size == 'b'
            })}
            {...props}
        >
            {children}
        </p>
    );
};