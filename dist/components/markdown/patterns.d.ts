import { ReactNode } from "react";
interface Processor {
    element: (m: RegExpMatchArray) => ReactNode;
    pattern: RegExp;
}
export declare const HIGHLIGHT_PROCESS: Processor;
export declare const SUPERSCRIPT_PROCESS: Processor;
export declare const SUBSCRIPT_PROCESS: Processor;
export declare function getAppliedStyles(tag: string, value: ReactNode): import("react/jsx-runtime").JSX.Element;
export declare const STYLE_PROCESS: Processor;
export declare const TOC_PROCESS: Processor;
export declare const processingOrder: Processor[];
export {};
