import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import {EmployeeListInterface, TasksInterface} from "../../../../interfaces";

import Content from "./content/content.tsx";

import '../../employee-view.css'

interface EmployeeTasksProps{
    currentUsers: EmployeeListInterface[]
    currentTasks: TasksInterface[]
}
const EmployeeTasks : React.FC<EmployeeTasksProps> = (
    {
        currentUsers,
        currentTasks
    }) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation />
            <Content currentUsers={currentUsers} currentTasks={currentTasks}/>
        </div>
    )
}

export default EmployeeTasks;