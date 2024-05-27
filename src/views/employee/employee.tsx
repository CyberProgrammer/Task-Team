import React, {useState} from "react"

import './employee.css'
import {Constants} from "./utils/constants.ts";

import EmployeeNavigation from "./navigation/employee-navigation.tsx";
import EmployeeDashboard from "./views/dashboard/employee-dashboard.tsx"

interface EmployeeHomeProps {

}
const Employee : React.FC<EmployeeHomeProps> = ({}) => {
    const [selectedSection, setSelectedSection] = useState(Constants.DASHBOARD);

    return(
        <div id={"employee-container"}>
            <EmployeeNavigation selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
            <div id={"employee-content"}>
                {selectedSection === Constants.DASHBOARD && <EmployeeDashboard />}
                {selectedSection === Constants.TASKS && <h1>Tasks Employee - LoggedIn</h1>}
                {selectedSection === Constants.TEAMS && <h1>Teams Employee - LoggedIn</h1>}
                {selectedSection === Constants.PROGRESS && <h1>Progress Employee - LoggedIn</h1>}
                {selectedSection === Constants.HISTORY && <h1>History Employee - LoggedIn</h1>}
                {selectedSection === Constants.SETTINGS && <h1>Settings Employee - LoggedIn</h1>}
            </div>
        </div>
    )
}

export default Employee;