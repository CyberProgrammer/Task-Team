import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import {EmployeeInterface} from "../../../../interfaces";
import Content from "./content/content.tsx";

import '../../employee-view.css'

interface EmployeeTasksProps{
    currentUser: EmployeeInterface
}
const EmployeeTasks : React.FC<EmployeeTasksProps> = (
    {
        currentUser
    }) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation currentUser={currentUser}/>
            <Content currentUser={currentUser} />
        </div>
    )
}

export default EmployeeTasks;