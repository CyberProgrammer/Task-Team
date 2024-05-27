import React, {useState} from "react"

import './employee.css'
import {Constants} from "./utils/constants.ts";

import EmployeeNavigation from "./navigation/employee-navigation.tsx";
import EmployeeDashboard from "./views/dashboard/employee-dashboard.tsx"
import Tasks from "./views/tasks/tasks.tsx";
import Teams from "./views/teams/teams.tsx";
import Progress from "./views/progress/progress.tsx";
import History from "./views/history/history.tsx";
import Settings from "./views/settings/settings.tsx";

interface EmployeeHomeProps {

}
const Employee : React.FC<EmployeeHomeProps> = ({}) => {
    const [selectedSection, setSelectedSection] = useState(Constants.DASHBOARD);

    return(
        <div id={"employee-container"}>
            <EmployeeNavigation selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
            <div id={"employee-content"}>
                {selectedSection === Constants.DASHBOARD && <EmployeeDashboard />}
                {selectedSection === Constants.TASKS && <Tasks />}
                {selectedSection === Constants.TEAMS && <Teams />}
                {selectedSection === Constants.PROGRESS && <Progress />}
                {selectedSection === Constants.HISTORY && <History />}
                {selectedSection === Constants.SETTINGS && <Settings />}
            </div>
        </div>
    )
}

export default Employee;