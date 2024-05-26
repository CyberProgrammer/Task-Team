import React, {useState} from "react"

import './employee.css'

import EmployeeNavigation from "./navigation/employee-navigation.tsx";
import EmployeeDashboard from "./views/dashboard/employee-dashboard.tsx"

interface EmployeeHomeProps {

}

const Employee : React.FC<EmployeeHomeProps> = (
    {

    }) => {
    const [selectedSection, setSelectedSection] = useState('Home');

    return(
        <div id={"employee-container"}>
            <EmployeeNavigation selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
            <div id={"employee-content"}>
                {selectedSection === 'Home' && <EmployeeDashboard />}
                {selectedSection === 'Teams' && <h1>Teams Employee - LoggedIn</h1>}
                {selectedSection === 'Projects' && <h1>Projects Employee - LoggedIn</h1>}
                {selectedSection === 'Settings' && <h1>Settings Employee - LoggedIn</h1>}
            </div>
        </div>
    )
}

export default Employee;