
import styles from './Card.module.css';
import {HhData} from "@/components/Card/Card.props";
import cn from "classnames";

export const Card = ({ color='white', children, className, ...props }: HhData): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}
             {...props}
        >
            {children}
        </div>
    );
};