import { MarkdownRenderer } from "@lib/main";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export interface IRouter {
    path: string
    routes?: IRouter[]
    markdown?: string
    default?: string
    useOutlet?: boolean
}

export default class Router {
    private element?: JSX.Element;
    private readonly useOutlet: boolean;
    readonly default?: string;
    readonly markdown?: string;
    readonly parent?: Router;
    readonly path: string;

    private routes = new Map<string, Router>();

    setElement(element: JSX.Element) {
        this.element = element;

        return this;
    }

    setPathElement(path: string, element: JSX.Element) {
        const p = this.getPath();

        if (p === path)
            this.setElement(element);
        else {
            this.routes.forEach((router) => {
                router.setPathElement(path, element);
            });
        }
    }

    getMarkdown() {
        if (!this.markdown)
            return null;

        return <MarkdownRenderer
            href={this.markdown}
        />
    }

    getElement() {
        if (!this.element && !this.markdown) {
            return <>
                <ul
                    className='no-content router-nav-list'
                >
                    {
                        this.getRoutes().map(([path, route]) => {
                            return <li
                                key={path}
                                className='no-content router-nav-item'
                            >
                                <NavLink
                                    to={route.getPath()}
                                >
                                    {path}
                                </NavLink>
                            </li>
                        })
                    }
                </ul>

                {this.useOutlet && <Outlet />}
            </>
        }

        return <>
            {this.element}

            {this.getMarkdown()}

            {this.useOutlet && <Outlet />}
        </>
    }

    getRoutes() {
        return Array.from(this.routes);
    }

    getPath(): string {
        if (!this.parent)
            return this.path;

        return this.parent.getPath() + this.path;
    }

    private addRoute(router: IRouter) {
        this.routes.set(router.path, new Router(router, this));
    }

    constructor(router: IRouter, parent?: Router) {
        this.path = router.path;
        this.markdown = router.markdown;
        this.default = router.default;
        this.useOutlet = !!router.useOutlet;

        if (router.routes)
            router.routes.forEach((route) => this.addRoute(route))

        this.parent = parent;
    }
}