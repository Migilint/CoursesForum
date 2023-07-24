
import styles from './Up.module.css';
import ArrowUpIcon from './arrowUp.svg';
import cn from "classnames";
import {useScrollY} from "@/hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {Button} from "@/components";
import {ButtonIcon} from "@/components/ButtonIcon/ButtonIcon";


export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({
            opacity: y / (document.body.scrollHeight - 885)
        });
}, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={styles.up}
            animate={controls}
            initial={{opacity: 0}}
        >
            <ButtonIcon appearance={'primary'} icon={'up'} onClick={scrollToTop}/>
        </motion.div>
    );
};