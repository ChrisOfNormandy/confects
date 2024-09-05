import './styles/markdown-renderer.scss';
import { HTML_DivProps } from '../../types/html';
export interface MarkdownFeatureFlags {
    reload?: boolean;
    renderToggle?: boolean;
    print?: boolean;
    download?: boolean;
    bodyOnly?: boolean;
}
export type MarkdownRendererProps = {
    defaultContent?: string;
    href: string;
    features?: MarkdownFeatureFlags;
} & HTML_DivProps;
export declare function MarkdownRenderer({ className, defaultContent, href, features, ...props }: MarkdownRendererProps): import("react/jsx-runtime").JSX.Element;
