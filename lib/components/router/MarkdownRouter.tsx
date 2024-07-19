import { AuthWrapper, AuthWrapperProps, HTML_DivProps, Router } from "@";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

let root: Router;

export function useRouter() {
    return root;
}

export type MarkdownRouterProps = {
    router: Router
    useAuth?: AuthWrapperProps
} & HTML_DivProps;

export function MarkdownRouter(
    {
        router,
        useAuth
    }: MarkdownRouterProps
) {
    root = router;

    if (useAuth) {
        return <BrowserRouter>
            <AuthWrapper
                {...useAuth}
            >
                <Routes>
                    {xRoute(router)}
                </Routes>
            </AuthWrapper>
        </BrowserRouter>
    }

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