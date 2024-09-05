import { MarkdownFeatureFlags } from "../markdown/MarkdownRenderer";
interface MarkdownDefinition {
    href: string;
    features?: MarkdownFeatureFlags;
}
interface ContentDefinition {
    href: string;
}
interface IRouter {
    path: string;
    routes?: IRouter[];
    default?: string;
    noNav?: boolean;
    markdown?: MarkdownDefinition;
    content?: ContentDefinition;
}
export declare class CRouter {
    readonly default?: string;
    readonly parent?: CRouter;
    readonly path: string;
    readonly noNav: boolean;
    readonly markdown?: MarkdownDefinition;
    readonly content?: ContentDefinition;
    private readonly routes;
    element?: () => JSX.Element;
    setElement(element: () => JSX.Element): this;
    setPathElement(path: string, element: () => JSX.Element): void;
    getRoutes(): [string, CRouter][];
    getPath(...paths: string[]): string;
    doRenderNav(): boolean;
    private addRoute;
    root(): [string, CRouter][];
    constructor(router: IRouter, parent?: CRouter);
}
export {};
