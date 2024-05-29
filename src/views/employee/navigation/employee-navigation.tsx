import React from "react";

import './employee-navigation.css'
import {Constants} from "../utils/constants.ts"
import {EmployeeInterface} from "../../../interfaces";

import Header from "./header/header.tsx"
import Footer from "./footer/footer.tsx"
import NavigationButton from "../../../components/buttons/NavigationButton.tsx"

/* Icons */
import DashboardIconLight from "../../../../assets/icons/light_mode/dashboard.svg"
import DashboardIconDark from "../../../../assets/icons/dark_mode/dashboard.svg"
import TaskIconLight from "../../../../assets/icons/light_mode/tasks.svg"
import TaskIconDark from "../../../../assets/icons/dark_mode/tasks.svg"
import TeamIconLight from "../../../../assets/icons/light_mode/group.svg"
import TeamIconDark from "../../../../assets/icons/dark_mode/group.svg"
import ProgressIconLight from "../../../../assets/icons/light_mode/progress.svg"
import ProgressIconDark from "../../../../assets/icons/dark_mode/progress.svg"
import HistoryIconLight from "../../../../assets/icons/light_mode/history.svg"
import HistoryIconDark from "../../../../assets/icons/dark_mode/history.svg"
import SettingIconLight from "../../../../assets/icons/light_mode/setting.svg"
import SettingIconDark from "../../../../assets/icons/dark_mode/setting.svg"


interface EmployeeNavigationProps {
    selectedSection: string
    setSelectedSection: React.Dispatch<React.SetStateAction<string>>
    currentUser: EmployeeInterface
}

const EmployeeNavigation : React.FC<EmployeeNavigationProps> = (
    {
        selectedSection,
        setSelectedSection,
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return (
        <div id={"side-navigation"} className={`${isDarkMode ? "dark-navigation" : "light-navigation"}`}>
            <Header currentUser={currentUser} />
            <div id={"side-navigation-links"}>
                <NavigationButton icon={isDarkMode ? DashboardIconDark : DashboardIconLight} currentUser={currentUser} isSelected={selectedSection == Constants.DASHBOARD} text={Constants.DASHBOARD} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={isDarkMode ? TaskIconDark : TaskIconLight} currentUser={currentUser} isSelected={selectedSection == Constants.TASKS} text={Constants.TASKS} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={isDarkMode ? TeamIconDark : TeamIconLight} currentUser={currentUser} isSelected={selectedSection == Constants.TEAMS} text={Constants.TEAMS} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={isDarkMode ? ProgressIconDark : ProgressIconLight} currentUser={currentUser} isSelected={selectedSection == Constants.PROGRESS} text={Constants.PROGRESS} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={isDarkMode ? HistoryIconDark : HistoryIconLight} currentUser={currentUser} isSelected={selectedSection == Constants.HISTORY} text={Constants.HISTORY} setSelectedSection={setSelectedSection}/>
                <NavigationButton icon={isDarkMode ? SettingIconDark : SettingIconLight} currentUser={currentUser} isSelected={selectedSection == Constants.SETTINGS} text={Constants.SETTINGS} setSelectedSection={setSelectedSection}/>
            </div>
            <Footer />
        </div>
    )
}

export default EmployeeNavigation;