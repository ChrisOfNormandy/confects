interface IRouter {
    path: string;
    routes?: IRouter[];
    markdown?: string;
    default?: string;
    noOutlet?: boolean;
}
export declare class Router {
    private element?;
    readonly default?: string;
    readonly markdown?: string;
    readonly parent?: Router;
    readonly path: string;
    private readonly noOutlet;
    private routes;
    setElement(element: () => JSX.Element): this;
    setPathElement(path: string, element: () => JSX.Element): void;
    private getMarkdown;
    private getContent;
    private getNoContent;
    getElement(): import("react/jsx-runtime").JSX.Element;
    getRoutes(): [string, Router][];
    getPath(): string;
    private addRoute;
    constructor(router: IRouter, parent?: Router);
}
export {};
