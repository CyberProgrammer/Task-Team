import React from "react";

import './employee-navigation.css'

import ControlButton from "../../../components/buttons/ControlButton.tsx";

const EmployeeNavigation = () => {
    return(
        <div id={"side-navigation"}>
            <div className={"side-navigation-header"}>

            </div>
            <div className={"side-navigation-links"}>
                <ControlButton text={"Home"} />
                <ControlButton text={"Teams"} />
                <ControlButton text={"Home"} />
            </div>
            <div className={"side-navigation-footer"}>

            </div>
        </div>
    )
}

export default EmployeeNavigation;