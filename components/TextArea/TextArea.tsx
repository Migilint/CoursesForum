
import styles from './TextArea.module.css';
import {TextAreaProps} from "@/components/TextArea/TextArea.props";
import cn from "classnames";

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textArea)} {...props} />
    );
};