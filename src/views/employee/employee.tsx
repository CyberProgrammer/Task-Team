import React from "react"

import './employee.css'

import EmployeeNavigation from "./navigation/employee-navigation.tsx";

interface EmployeeHomeProps {

}

const Employee : React.FC<EmployeeHomeProps> = (
    {

    }) => {

    return(
        <div id={"employee-home"}>
            <EmployeeNavigation />
            <div className={"employee-content"}>
                <h1>Home Employee - LoggedIn</h1>
            </div>
        </div>
    )
}

export default Employee;