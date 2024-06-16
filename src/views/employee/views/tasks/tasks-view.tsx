import React from "react";
import Navigation from "../../navigation/navigation.tsx";

import Content from "./content/content.tsx";

import '../../main-view.css'
import {TaskProvider} from "../../../../contexts/tasks.tsx";

interface EmployeeTasksProps{

}
const TasksView : React.FC<EmployeeTasksProps> = (
    {
    }) => {

    return (
        <div id={"employee-container"}>
            <TaskProvider>
                <Navigation />
                <Content />
            </TaskProvider>
        </div>
    )
}

export default TasksView;