import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const {
    VITE__AUTH_DOMAIN,
    VITE__AUTH_CLIENT_ID,
    VITE__AUTH_AUDIENCE
} = import.meta.env;

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

    const authDomain = domain || VITE__AUTH_DOMAIN;
    const authClientId = clientId || VITE__AUTH_CLIENT_ID;
    const authAudience = audience || VITE__AUTH_AUDIENCE;

    if (!(authDomain && authClientId)) {
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
                    audience: authAudience,
                    scope: scope
                }
            }
            domain={authDomain}
            clientId={authClientId}
            {...props}
        >
            {children}
        </Auth0Provider>
    );
}