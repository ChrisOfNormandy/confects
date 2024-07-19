import { Router, useRouter } from "@";
import { NavLink } from "react-router-dom";

interface IRouteProps {
    router: Router
}

export function RouterNav() {
    const router = useRouter();

    return <Route router={router} />
}

function Route(
    {
        router
    }: IRouteProps
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
    }: IRouteProps
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