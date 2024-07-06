import { ClassAttributes, HTMLAttributes } from "react";
import { Components, ExtraProps } from "react-markdown";
export type ElementProps<T extends HTMLElement> = ClassAttributes<T> & HTMLAttributes<T> & ExtraProps;
export declare const renderers: Partial<Components>;
