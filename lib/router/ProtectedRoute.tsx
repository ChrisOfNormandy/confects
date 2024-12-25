import { Loading } from "$/decorations";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export type ProtectedRouteProps = {
    element: React.ComponentType<object>
}

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const Element = withAuthenticationRequired(element, {
        onRedirecting: () => (
            <Loading />
        ),
    });

    return <Element />;
};