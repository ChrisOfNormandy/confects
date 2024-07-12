import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from '@lib/main';

export type ProtectedRouteProps = {
    element: React.ComponentType<object>
}

export default function ProtectedRoute({ element }: ProtectedRouteProps) {
    const Element = withAuthenticationRequired(element, {
        onRedirecting: () => (
            <Loading />
        ),
    });

    return <Element />;
};