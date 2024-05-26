import React from "react";

import './employee-navigation.css'

import ControlButton from "../../../components/buttons/ControlButton.tsx";
import TeamLogo from "../../../../assets/logos/TeamLogo.svg";
import SettingIcon from "../../../../assets/icons/setting.svg";

/* Icons */
import HomeIcon from "../../../../assets/icons/dashboard.svg";
import TeamIcon from "../../../../assets/icons/group.svg"
import FooterButton from "../../../components/buttons/FooterButton.tsx";

interface EmployeeNavigationProps {
    selectedSection: string
    setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}

const EmployeeNavigation : React.FC<EmployeeNavigationProps> = (
    {
        selectedSection,
        setSelectedSection
    }) => {

    return (
        <div id={"side-navigation"}>
            <div id={"side-navigation-header"}>
                <img id="team-logo" src={TeamLogo} alt="Team Logo"/>
            </div>
            <div id={"side-navigation-links"}>
                <ControlButton icon={HomeIcon} isSelected={selectedSection == "Home"} text="Home" setSelectedSection={setSelectedSection}/>
                <ControlButton icon={TeamIcon} isSelected={selectedSection == "Teams"} text="Teams" setSelectedSection={setSelectedSection}/>
                <ControlButton icon={HomeIcon} isSelected={selectedSection == "Projects"} text="Projects" setSelectedSection={setSelectedSection}/>
            </div>
            <div id={"side-navigation-footer"}>
                <FooterButton icon={SettingIcon} text={"Settings"} setSelectedSection={setSelectedSection} />
            </div>
        </div>
    )
}

export default EmployeeNavigation;