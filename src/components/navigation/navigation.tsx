import React from "react"
import CompanyLogo from "../../../assets/logos/LogoWide.svg"
import { Link, useLocation} from "react-router-dom"
import LoginButton from "../buttons/LoginButton.tsx"
import {useAuth0} from "@auth0/auth0-react"
import LogoutButton from "../buttons/LogoutButton.tsx";


const Navigation : React.FC = () => {
    const {isAuthenticated} = useAuth0()
    const location = useLocation()
    const isIndex = location.pathname === "/"

    return(
        <div>
            <nav id={"navigation"}>
                <div className={"logo-container"}>
                    <img id={"company-logo"} src={CompanyLogo} alt="logo"/>
                </div>
                <div className={"link-container"}>
                    { !isIndex ?
                        (
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                            </ul>
                        ) : null
                    }
                </div>
                <div className={"button-container"}>
                    {isAuthenticated ?
                        <LogoutButton /> : <LoginButton />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navigation