
import styles from './Card.module.css';
import {CardProps} from "@/components/Card/Card.props";
import cn from "classnames";
import {forwardRef, ForwardedRef} from "react";

export const Card = forwardRef(({ color='white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}
             ref={ref}
             {...props}
        >
            {children}
        </div>
    );
});