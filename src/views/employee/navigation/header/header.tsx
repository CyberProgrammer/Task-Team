import React from "react";
import TeamLogo from "../../../../../assets/logos/TeamLogo.svg";

const Header : React.FC = () => {

    return (
        <div id={"side-navigation-header"}>
            <img id="team-logo" src={TeamLogo} alt="Team Logo"/>
        </div>
    )
}

export default Header;