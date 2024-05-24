import React from "react";
import CompanyLogo from "../../../assets/logos/company_logo.png";
import { Link, useNavigate } from "react-router-dom";

interface NavigationProps {
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

const Navigation : React.FC<NavigationProps> = (
    {
        onLogin,
        onLogout,
        isLoggedIn
    }) => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Call the onLogin function passed from the parent component
        onLogin();
        navigate("/home");
    };

    const handleLogoutClick = () => {
        // Call the onLogout function passed from the parent component
        onLogout();
        navigate("/");
    };

    return(
        <div>
            <nav id={"navigation"}>
                <div className={"logo-container"}>
                    <img id={"company-logo"} src={CompanyLogo} alt="logo"/>
                </div>
                <div className={"link-container"}>
                    <ul>
                        {isLoggedIn ?
                            (<li><Link to="/home">Home</Link></li>) : (null)
                        }
                    </ul>
                </div>
                <div className={"button-container"}>
                    {!isLoggedIn ? (
                        <button className={"primaryButton"} onClick={handleLoginClick}>Login</button>
                    ) : (
                        <button className={"primaryButton"} onClick={handleLogoutClick}>Logout</button>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navigation