import { HTMLDivProps } from "@lib/main"
import Router from "./Router"
import { useRouter } from "./MarkdownRouter";
import { NavLink } from "react-router-dom";

interface extRouteProps {
    router: Router
}

export type RouterNavProps = HTMLDivProps;

export default function RouterNav() {
    const router = useRouter();

    return <Route router={router} />
}

function Route(
    {
        router
    }: extRouteProps
) {
    if (!router.path) {
        return <RouteList
            router={router}
        />
    }

    return <div
        className='router-nav'
    >
        <NavLink
            to={router.getPath()}
        >
            {router.path}
        </NavLink>

        <RouteList
            router={router}
        />
    </div>
}

function RouteList(
    {
        router
    }: extRouteProps
) {
    return <ul
        className='router-nav-list'
    >
        {
            router.getRoutes().map(([path, route]) => {
                return <li
                    key={path}
                    className='router-nav-item'
                >
                    <Route
                        router={route}
                    />
                </li>
            })
        }
    </ul>
}