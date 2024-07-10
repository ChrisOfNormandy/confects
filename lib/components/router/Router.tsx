import { MarkdownRenderer } from "@lib/main";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

interface IRouter {
    path: string
    routes?: IRouter[]
    markdown?: string
    default?: string
    noOutlet?: boolean
}

export default class Router {
    private element?: () => JSX.Element;
    readonly default?: string;
    readonly markdown?: string;
    readonly parent?: Router;
    readonly path: string;
    private readonly noOutlet: boolean;

    private routes = new Map<string, Router>();

    setElement(element: () => JSX.Element) {
        this.element = element;

        return this;
    }

    setPathElement(path: string, element: () => JSX.Element) {
        const p = this.getPath();

        if (p === path)
            this.setElement(element);
        else {
            this.routes.forEach((router) => {
                router.setPathElement(path, element);
            });
        }
    }

    private getMarkdown() {
        if (!this.markdown)
            return null;

        return <MarkdownRenderer
            href={this.markdown}
        />
    }

    private getContent() {
        console.log(this.getPath(), this.markdown, this.element);

        if (!this.markdown && !this.element) {
            console.warn('NO CONTENT');

            return this.getNoContent();
        }

        return <div
            className='router-content'
        >
            {this.element && this.element()}

            {this.getMarkdown()}

            {
                (this.routes.size > 0 && !this.noOutlet) &&
                <Outlet />
            }
        </div>
    }

    private getNoContent() {
        if (!this.routes.size) {
            return <div>
                No content.
            </div>
        }

        return <ul
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

            {
                !this.noOutlet &&
                <Outlet />
            }
        </ul>
    }

    getElement() {
        return this.getContent() || this.getNoContent();
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
        this.noOutlet = !!router.noOutlet;

        if (router.routes)
            router.routes.forEach((route) => this.addRoute(route))

        this.parent = parent;
    }
}