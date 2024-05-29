import React from "react";
import TeamLogoLight from "../../../../../assets/logos/light_mode/TeamLogo.svg";
import TeamLogoDark from "../../../../../assets/logos/dark_mode/TeamLogo.svg";

import {EmployeeInterface} from "../../../../interfaces";

interface HeaderProps {
    currentUser: EmployeeInterface
}
const Header : React.FC<HeaderProps> = (
    {
        currentUser,
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return (
        <div id={"side-navigation-header"}>
            <img id="team-logo" src={isDarkMode ? TeamLogoDark : TeamLogoLight} alt="Team Logo"/>
        </div>
    )
}

export default Header;