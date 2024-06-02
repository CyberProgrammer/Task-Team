import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";

import Content from "./content/content.tsx";

import '../../employee-view.css'
import {TaskProvider} from "../../../../contexts/task_list_context.tsx";

interface EmployeeTasksProps{

}
const EmployeeTasks : React.FC<EmployeeTasksProps> = (
    {
    }) => {

    return (
        <div id={"employee-container"}>
            <TaskProvider>
                <EmployeeNavigation />
                <Content />
            </TaskProvider>
        </div>
    )
}

export default EmployeeTasks;