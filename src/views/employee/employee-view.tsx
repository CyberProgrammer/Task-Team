import React, {useState} from "react"

import './employee-view.css'
import {Constants} from "./utils/constants.ts";
import {EmployeeInterface} from "../../interfaces";

import EmployeeNavigation from "./navigation/employee-navigation.tsx";
import EmployeeDashboard from "./views/dashboard/employee-dashboard.tsx"
import Tasks from "./views/tasks/tasks.tsx";
import Teams from "./views/teams/teams.tsx";
import Progress from "./views/progress/progress.tsx";
import History from "./views/history/history.tsx";
import Settings from "./views/settings/settings.tsx";

interface EmployeeViewProps {
    currentUser: EmployeeInterface
}
const EmployeeView : React.FC<EmployeeViewProps> = (
    {
        currentUser,
    }) => {

    const [selectedSection, setSelectedSection] = useState(Constants.DASHBOARD);

    const isDarkMode = currentUser.settings.isDarkMode

    return(
        <div id={"employee-container"}>
            <EmployeeNavigation currentUser={currentUser} selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
            <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
                {selectedSection === Constants.DASHBOARD &&
                    <EmployeeDashboard
                        currentUser={currentUser}
                    />
                }
                {selectedSection === Constants.TASKS && <Tasks />}
                {selectedSection === Constants.TEAMS && <Teams />}
                {selectedSection === Constants.PROGRESS && <Progress />}
                {selectedSection === Constants.HISTORY && <History />}
                {selectedSection === Constants.SETTINGS && <Settings />}
            </div>
        </div>
    )
}

export default EmployeeView;