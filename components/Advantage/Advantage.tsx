
import styles from './Advantage.module.css';
import {AdvantageProps} from "@/components/Advantage/Advantage.props";
import cn from "classnames";
import CheckMarkIcon from "./checkMark.svg";

export const Advantage = ({ advantages }: AdvantageProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckMarkIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );
};