import './styles/markdown-renderer.scss';
import { HTMLDivProps } from "../../main";
interface extMarkdownRendererProps {
    defaultContent?: string;
    href: string;
}
export type MarkdownRendererProps = HTMLDivProps & extMarkdownRendererProps;
export default function MarkdownRenderer({ className, defaultContent, href, ...props }: MarkdownRendererProps): import("react/jsx-runtime").JSX.Element;
export {};
