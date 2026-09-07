import type { JSX } from 'react';

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];
