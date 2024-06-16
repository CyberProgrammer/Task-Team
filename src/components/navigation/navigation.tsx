import React from "react"

import './navigation.css'

import CompanyLogo from "../../../assets/logos/LogoWide.svg"
import LoginButton from "../buttons/LoginButton.tsx"
import DemoButton from "../buttons/DemoButton.tsx";

const Navigation : React.FC = () => {

    return (
        <nav id={"navigation"}>
            <div className={"logo-container"}>
                <img id={"company-logo"} src={CompanyLogo} alt="logo"/>
            </div>
            <div className={"button-container"}>
                <DemoButton/>
                <LoginButton/>
            </div>
        </nav>
    )
}

export default Navigation