import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import {EmployeeInterface, EmployeeListInterface, TasksInterface} from "../../../../interfaces";

import Content from "./content/content.tsx";

import '../../employee-view.css'

interface EmployeeTasksProps{
    currentUser: EmployeeInterface
    currentUsers: EmployeeListInterface[]
    currentTasks: TasksInterface[]
}
const EmployeeTasks : React.FC<EmployeeTasksProps> = (
    {
        currentUser,
        currentUsers,
        currentTasks
    }) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation currentUser={currentUser}/>
            <Content currentUser={currentUser} currentUsers={currentUsers} currentTasks={currentTasks}/>
        </div>
    )
}

export default EmployeeTasks;