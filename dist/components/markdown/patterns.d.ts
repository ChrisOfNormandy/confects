import { ReactNode } from "react";
interface Processor {
    element: (m: RegExpMatchArray) => ReactNode;
    pattern: RegExp;
}
export declare const processingOrder: Processor[];
export {};
