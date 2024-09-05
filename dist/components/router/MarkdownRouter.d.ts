import { RouteProps } from "react-router-dom";
import { HTML_DivProps } from "../../types/html";
import { CRouter } from "./CRouter";
import React from "react";
export declare function useRouter(): CRouter;
export type MarkdownRouterProps = {
    router: CRouter;
} & HTML_DivProps;
export declare function MarkdownRouter({ router }: MarkdownRouterProps): import("react/jsx-runtime").JSX.Element[];
export declare function markdownRouter(router: CRouter, Route: React.ComponentType<RouteProps>): import("react/jsx-runtime").JSX.Element[];
