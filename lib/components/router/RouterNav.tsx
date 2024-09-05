import './styles/router-nav.scss';
import { CRouter } from './CRouter';
import { getClassName } from '$/helpers';
import { useRouter } from './MarkdownRouter';

interface IRouteProps {
    router: CRouter
    maxDepth?: number
    __depth?: number
}

interface RouterNavProps {
    router?: CRouter
    maxDepth?: number
}

export function RouterNav(
    {
        router,
        maxDepth,
    }: RouterNavProps
) {
    return <div
        className='router-nav'
    >
        <RouteList
            router={router || useRouter()}
            maxDepth={maxDepth}
        />
    </div>
}

function Route(
    {
        router,
        maxDepth,
        __depth = 0
    }: IRouteProps
) {
    if (__depth === maxDepth)
        return null;

    if (!router.path) {
        return <RouteList
            router={router}
            maxDepth={maxDepth}
            __depth={__depth + 1}
        />
    }

    return <div
        className='router-nav-link'
    >
        <a
            href={router.getPath()}
        >
            {router.path.slice(1).split(/[-_]/g).map((s) => s[0]?.toUpperCase() + s.slice(1)).join(' ')}
        </a>

        <RouteList
            router={router}
            maxDepth={maxDepth}
            __depth={__depth + 1}
        />
    </div>
}

function RouteList(
    {
        router,
        maxDepth,
        __depth = 0,
    }: IRouteProps
) {
    if (!router)
        return null;

    const routes = router.getRoutes();

    if (!routes.length || __depth === maxDepth)
        return null;

    return <ul
        className={getClassName('router-nav-list', !!__depth && 'f-content')}
    >
        {
            routes.map(([path, route]) => {
                return <li
                    key={path}
                    className='router-nav-item'
                >
                    <Route
                        router={route}
                        maxDepth={maxDepth}
                        __depth={__depth}
                    />
                </li>
            })
        }
    </ul>
}