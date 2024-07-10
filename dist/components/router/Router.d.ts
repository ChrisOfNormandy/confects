export interface IRouter {
    path: string;
    routes?: IRouter[];
    markdown?: string;
    default?: string;
    useOutlet?: boolean;
}
export default class Router {
    private element?;
    private readonly useOutlet;
    readonly default?: string;
    readonly markdown?: string;
    readonly parent?: Router;
    readonly path: string;
    private routes;
    setElement(element: JSX.Element): this;
    setPathElement(path: string, element: JSX.Element): void;
    getMarkdown(): import("react/jsx-runtime").JSX.Element | null;
    getElement(): import("react/jsx-runtime").JSX.Element;
    getRoutes(): [string, Router][];
    getPath(): string;
    private addRoute;
    constructor(router: IRouter, parent?: Router);
}
