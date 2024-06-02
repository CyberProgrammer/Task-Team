import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";
import {UserProvider} from "./contexts/user_context.tsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN as string;
const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID as string;

if (!domain || !clientID) {
    throw new Error('Auth0 domain or client ID is missing');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider
        domain={domain}
        clientId={clientID}
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: `https://${domain}/api/v2/`,
            scope: "openid profile email read:current_user"
        }}
    >
        <BrowserRouter>
            <UserProvider>
                <App/>
            </UserProvider>
        </BrowserRouter>
    </Auth0Provider>,
)