import React from "react";
import useMenuHandlers from "../functions/handleMenus.tsx"

import '../employee-tasks.css'

import {EmployeeInterface, EmployeeListInterface, TasksInterface} from "../../../../../interfaces";
import TasksToolbar from "./toolbar/tasks-toolbar.tsx";
import TasksTable from "./table/tasks-table.tsx";
import AddTaskMenu from "./menus/add-task-menu.tsx";
import FilterMenu from "./menus/filter-menu.tsx";
import SortMenu from "./menus/sort-menu.tsx";

interface ContentProps{
    currentUser: EmployeeInterface
    currentUsers: EmployeeListInterface[]
    currentTasks: TasksInterface[]
}
const Content : React.FC<ContentProps> = (
    {
        currentUser,
        currentUsers,
        currentTasks
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    const {
        filterMenuOpen,
        sortMenuOpen,
        addTaskMenuOpen,
        toggleMenu
    } = useMenuHandlers();



    return(
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-tasks"}>
                <TasksToolbar
                    currentUser={currentUser}
                    handleAddTaskMenu={() => toggleMenu('addTask')}
                    handleOpenFilterMenu={() => toggleMenu('filter')}
                    handleSortMenu={() => toggleMenu('sort')}
                />

                {filterMenuOpen && <FilterMenu currentUser={currentUser} />}
                {sortMenuOpen && <SortMenu currentUser={currentUser} />}
                {addTaskMenuOpen ?
                    <AddTaskMenu currentUser={currentUser} toggleAddTaskMenu={() => toggleMenu('addTask')}/>
                    :
                    <TasksTable currentUser={currentUser} currentUsers={currentUsers} currentTasks={currentTasks}/>
                }
            </div>
        </div>
    )
}

export default Content;
