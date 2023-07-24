import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    size?: 'white' | 'blue';
    position?: 'top' | 'bottom' | 'default';
    children: ReactNode;
}