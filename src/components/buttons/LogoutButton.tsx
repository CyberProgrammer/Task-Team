import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout({
            logoutParams: { returnTo: window.location.origin },
        })

        navigate('/')
    };

    return (
        <button className="primaryButton" onClick={handleLogout}>
            Log Out
        </button>
    )
}

export default LogoutButton;