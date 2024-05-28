import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    const handleLogin = () => {
        if(isAuthenticated){
            window.location.href = '/home';
        } else{
            loginWithRedirect();
        }
    }

    return (
        <button className={"primaryButton"} onClick={handleLogin}>
            Log In
        </button>
    )
}

export default LoginButton;