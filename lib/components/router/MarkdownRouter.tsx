import { HTMLDivProps } from "@lib/main"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Router from "./Router";

let root: Router;

export function useRouter() {
    return root;
}

interface extMarkdownRouterProps {
    router: Router
}

export type MarkdownRouterProps = HTMLDivProps & extMarkdownRouterProps;

export default function MarkdownRouter(
    {
        router
    }: MarkdownRouterProps
) {
    root = router;

    return <BrowserRouter>
        <Routes>
            {xRoute(router)}
        </Routes>
    </BrowserRouter>
}

function xRoute(router: Router) {
    const subroutes = router.getRoutes();

    if (subroutes.length) {
        return <Route
            key={router.path}
            path={router.getPath()}
            element={router.getElement()}
        >
            {
                subroutes.map(([, route]) => {
                    return xRoute(route);
                })
            }

            {
                router.default &&
                <Route
                    path={router.getPath() + '/*'}
                    element={<Navigate to={router.getPath() + router.default} />}
                />
            }
        </Route>
    }

    return <Route
        key={router.path}
        path={router.getPath()}
        element={router.getElement()}
    />
}