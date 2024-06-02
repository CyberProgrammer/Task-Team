import React from "react";

import './employee-navigation.css'
import {Constants} from "../utils/constants.ts"

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
import {useLocation} from "react-router-dom";
import {useUser} from "../../../contexts/user_context.tsx";


interface EmployeeNavigationProps {

}

const EmployeeNavigation : React.FC<EmployeeNavigationProps> = ({}) => {
    const {currentUser} = useUser()

    const location = useLocation();
    const isDarkMode = currentUser.settings.isDarkMode

    const sections = [
        { text: Constants.DASHBOARD, path: "/home", iconLight: DashboardIconLight, iconDark: DashboardIconDark },
        { text: Constants.TASKS, path: "/employee/tasks", iconLight: TaskIconLight, iconDark: TaskIconDark },
        { text: Constants.TEAMS, path: "/employee/teams", iconLight: TeamIconLight, iconDark: TeamIconDark },
        { text: Constants.PROGRESS, path: "/employee/progress", iconLight: ProgressIconLight, iconDark: ProgressIconDark },
        { text: Constants.HISTORY, path: "/employee/history", iconLight: HistoryIconLight, iconDark: HistoryIconDark },
        { text: Constants.SETTINGS, path: "/employee/settings", iconLight: SettingIconLight, iconDark: SettingIconDark }
    ];

    return (
        <div id="side-navigation" className={isDarkMode ? "dark-navigation" : "light-navigation"}>
            <Header />
            <div id="side-navigation-links">
                {sections.map(section => (
                    <NavigationButton
                        key={section.text}
                        icon={isDarkMode ? section.iconDark : section.iconLight}
                        isSelected={location.pathname === section.path}
                        text={section.text}
                        path={section.path}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default EmployeeNavigation;