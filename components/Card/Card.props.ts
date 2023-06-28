import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HhData extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    size?: 'white' | 'blue';
    children: ReactNode;
}