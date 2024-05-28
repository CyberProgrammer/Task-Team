import React from "react"
import { Link, useLocation} from "react-router-dom"

import './navigation.css'

import CompanyLogo from "../../../assets/logos/LogoWide.svg"
import LoginButton from "../buttons/LoginButton.tsx"

const Navigation : React.FC = () => {
    const location = useLocation()
    const isIndex = location.pathname === "/"

    return (
        <nav id={"navigation"}>
            <div className={"logo-container"}>
                <img id={"company-logo"} src={CompanyLogo} alt="logo"/>
            </div>
            <div className={"link-container"}>
                {!isIndex ?
                    (
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                        </ul>
                    ) : null
                }
            </div>
            <div className={"button-container"}>
                <LoginButton/>
            </div>
        </nav>
    )
}

export default Navigation