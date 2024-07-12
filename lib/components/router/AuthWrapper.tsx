import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const SCOPES = 'openid profile email';

export type AuthWrapperProps = {
    scope?: string
    audience?: string
    redirectUri?: string
} & Auth0ProviderOptions;

export default function AuthWrapper(
    {
        children,
        scope = SCOPES,
        domain,
        clientId,
        audience,
        redirectUri,
        ...props
    }: AuthWrapperProps
) {
    const navigate = useNavigate();

    if (!(domain && clientId && audience)) {
        return <div>
            MISSING AUTH SETTINGS
        </div>;
    }

    return (
        <Auth0Provider
            onRedirectCallback={(appState) => navigate(appState?.returnTo || window.location.pathname)}
            authorizationParams={
                {
                    redirect_uri: redirectUri || window.location.origin,
                    audience,
                    scope: scope
                }
            }
            domain={domain}
            clientId={clientId}
            {...props}
        >
            {children}
        </Auth0Provider>
    );
}