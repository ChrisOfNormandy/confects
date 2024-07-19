import { AuthWrapperProps, HTML_DivProps, Router } from "../../main";
export declare function useRouter(): Router;
export type MarkdownRouterProps = {
    router: Router;
    useAuth?: AuthWrapperProps;
} & HTML_DivProps;
export declare function MarkdownRouter({ router, useAuth }: MarkdownRouterProps): import("react/jsx-runtime").JSX.Element;
