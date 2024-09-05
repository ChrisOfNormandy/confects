import { ContentLayoutSchema } from "./content/types";
import { HTML_DivProps } from "../../types/html";
export type ContentRendererProps = {
    defaultContent?: ContentLayoutSchema;
    href: string;
} & HTML_DivProps;
export default function ContentRenderer({ className, defaultContent, href, ...props }: ContentRendererProps): import("react/jsx-runtime").JSX.Element;
