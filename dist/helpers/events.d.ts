import { DragEventHandler, MouseEventHandler } from "react";
export declare function dragEvent<T extends HTMLElement>(fn: DragEventHandler<T>): DragEventHandler<T>;
export declare function mouseEvent<T extends HTMLElement>(fn: MouseEventHandler<T>): MouseEventHandler<T>;
