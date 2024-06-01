import React, {useState} from "react";

import '../employee-tasks.css'

import {EmployeeInterface} from "../../../../../interfaces";
import TasksToolbar from "./toolbar/tasks-toolbar.tsx";
import TasksTable from "./table/tasks-table.tsx";
import AddTaskMenu from "./menus/add-task-menu.tsx";

interface ContentProps{
    currentUser: EmployeeInterface;
}
const Content : React.FC<ContentProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [sortMenuOpen, setSortMenuOpen] = useState(false);
    const [addTaskMenuOpen, setAddTaskMenuOpen] = useState(false);

    return(
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-tasks"}>
                <TasksToolbar currentUser={currentUser} setAddTaskMenuOpen={setAddTaskMenuOpen}/>
                { addTaskMenuOpen ?
                    <AddTaskMenu currentUser={currentUser} setAddTaskMenuOpen={setAddTaskMenuOpen}/>
                    :
                    <TasksTable currentUser={currentUser} />
                }
            </div>
        </div>
    )
}

export default Content;
