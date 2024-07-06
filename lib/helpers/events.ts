import { DragEventHandler, MouseEventHandler } from "react";

export function dragEvent<T extends HTMLElement>(fn: DragEventHandler<T>): DragEventHandler<T> {
    return fn;
}

export function mouseEvent<T extends HTMLElement>(fn: MouseEventHandler<T>): MouseEventHandler<T> {
    return fn;
}