import { Auth0ProviderOptions } from '@auth0/auth0-react';
export type AuthWrapperProps = {
    scope?: string;
    audience?: string;
    redirectUri?: string;
} & Auth0ProviderOptions;
export declare function AuthWrapper({ children, scope, domain, clientId, audience, redirectUri, ...props }: AuthWrapperProps): import("react/jsx-runtime").JSX.Element;
