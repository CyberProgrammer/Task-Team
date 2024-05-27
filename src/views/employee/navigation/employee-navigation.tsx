import React from "react";

import './employee-navigation.css'
import {Constants} from "../utils/constants.ts"

import Header from "./header/header.tsx"
import Footer from "./footer/footer.tsx"
import NavigationButton from "../../../components/buttons/NavigationButton.tsx"

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
                <NavigationButton icon={DashboardIcon} isSelected={selectedSection == Constants.DASHBOARD} text={Constants.DASHBOARD} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={TaskIcon} isSelected={selectedSection == Constants.TASKS} text={Constants.TASKS} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={TeamIcon} isSelected={selectedSection == Constants.TEAMS} text={Constants.TEAMS} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={ProgressIcon} isSelected={selectedSection == Constants.PROGRESS} text={Constants.PROGRESS} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={HistoryIcon} isSelected={selectedSection == Constants.HISTORY} text={Constants.HISTORY} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={SettingIcon} isSelected={selectedSection == Constants.SETTINGS} text={Constants.SETTINGS} setSelectedSection={setSelectedSection}/>
            </div>
            <Footer />
        </div>
    )
}

export default EmployeeNavigation;