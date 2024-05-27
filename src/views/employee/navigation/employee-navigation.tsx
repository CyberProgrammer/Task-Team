import React from "react";

import './employee-navigation.css'
import {Constants} from "../utils/constants.ts"

import Header from "./header/header.tsx"
import Footer from "./footer/footer.tsx"
import ControlButton from "../../../components/buttons/ControlButton.tsx"

/* Icons */
import DashboardIcon from "../../../../assets/icons/dashboard.svg"
import TaskIcon from "../../../../assets/icons/tasks.svg"
import TeamIcon from "../../../../assets/icons/group.svg"
import ProgressIcon from "../../../../assets/icons/progress.svg"
import HistoryIcon from "../../../../assets/icons/history.svg"
import SettingIcon from "../../../../assets/icons/setting.svg"

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
            <Header />
            <div id={"side-navigation-links"}>
                <ControlButton icon={DashboardIcon} isSelected={selectedSection == Constants.DASHBOARD} text={Constants.DASHBOARD} setSelectedSection={setSelectedSection}/>
                <ControlButton icon={TaskIcon} isSelected={selectedSection == Constants.TASKS} text={Constants.TASKS} setSelectedSection={setSelectedSection}/>
                <ControlButton icon={TeamIcon} isSelected={selectedSection == Constants.TEAMS} text={Constants.TEAMS} setSelectedSection={setSelectedSection}/>
                <ControlButton icon={ProgressIcon} isSelected={selectedSection == Constants.PROGRESS} text={Constants.PROGRESS} setSelectedSection={setSelectedSection}/>
                <ControlButton icon={HistoryIcon} isSelected={selectedSection == Constants.HISTORY} text={Constants.HISTORY} setSelectedSection={setSelectedSection}/>
                <ControlButton icon={SettingIcon} isSelected={selectedSection == Constants.SETTINGS} text={Constants.SETTINGS} setSelectedSection={setSelectedSection}/>
            </div>
            <Footer setSelectedSection={setSelectedSection} />
        </div>
    )
}

export default EmployeeNavigation;