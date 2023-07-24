
import styles from './Card.module.css';
import {CardProps} from "@/components/Card/Card.props";
import cn from "classnames";
import {forwardRef, ForwardedRef} from "react";

export const Card = forwardRef(({ color='white', position, children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue',
            [styles.openedTop]: position == 'top',
            [styles.openedBottom]: position == 'bottom'
        })}
             ref={ref}
             {...props}
        >
            {children}
        </div>
    );
});