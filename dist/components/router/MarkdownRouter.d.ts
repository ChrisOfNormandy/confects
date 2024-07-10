import { HTMLDivProps } from "@lib/main";
import Router from "./Router";
export declare function useRouter(): Router;
interface extMarkdownRouterProps {
    router: Router;
}
export type MarkdownRouterProps = HTMLDivProps & extMarkdownRouterProps;
export default function MarkdownRouter({ router }: MarkdownRouterProps): import("react/jsx-runtime").JSX.Element;
export {};
