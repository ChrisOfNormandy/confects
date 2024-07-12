import { AuthWrapperProps, HTMLDivProps } from "@lib/main";
import Router from "./Router";
export declare function useRouter(): Router;
interface extMarkdownRouterProps {
    router: Router;
    useAuth?: AuthWrapperProps;
}
export type MarkdownRouterProps = HTMLDivProps & extMarkdownRouterProps;
export default function MarkdownRouter({ router, useAuth }: MarkdownRouterProps): import("react/jsx-runtime").JSX.Element;
export {};
