import './styles/markdown-renderer.scss';
import { HTML_DivProps } from "../../main";
export type MarkdownRendererProps = {
    defaultContent?: string;
    href: string;
} & HTML_DivProps;
export declare function MarkdownRenderer({ className, defaultContent, href, ...props }: MarkdownRendererProps): import("react/jsx-runtime").JSX.Element;
