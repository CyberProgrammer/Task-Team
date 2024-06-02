import React from "react";
import useMenuHandlers from "../functions/handleMenus.tsx"

import '../employee-tasks.css'

import {EmployeeListInterface, TasksInterface} from "../../../../../interfaces";
import TasksToolbar from "./toolbar/tasks-toolbar.tsx";
import TasksTable from "./table/tasks-table.tsx";
import AddTaskMenu from "./menus/add-task-menu.tsx";
import FilterMenu from "./menus/filter-menu.tsx";
import SortMenu from "./menus/sort-menu.tsx";
import {useUser} from "../../../../../contexts/user_context.tsx";

interface ContentProps{
    currentUsers: EmployeeListInterface[]
    currentTasks: TasksInterface[]
}
const Content : React.FC<ContentProps> = (
    {
        currentUsers,
        currentTasks
    }) => {
    const {currentUser} = useUser();
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
                    handleAddTaskMenu={() => toggleMenu('addTask')}
                    handleOpenFilterMenu={() => toggleMenu('filter')}
                    handleSortMenu={() => toggleMenu('sort')}
                />

                {filterMenuOpen && <FilterMenu />}
                {sortMenuOpen && <SortMenu />}
                {addTaskMenuOpen ?
                    <AddTaskMenu toggleAddTaskMenu={() => toggleMenu('addTask')}/>
                    :
                    <TasksTable currentUsers={currentUsers} currentTasks={currentTasks}/>
                }
            </div>
        </div>
    )
}

export default Content;
