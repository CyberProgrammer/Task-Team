import React from "react";
import useMenuHandlers from "../functions/handleMenus.tsx"

import {useUser} from "../../../../../contexts/user_context.tsx";
import {useTasks} from "../../../../../contexts/task_list_context.tsx";

import '../employee-tasks.css'

import TasksToolbar from "./toolbar/tasks-toolbar.tsx";
import TasksTable from "./table/tasks-table.tsx";
import AddTaskMenu from "./menus/add-task-menu.tsx";
import FilterMenu from "./menus/filter-menu.tsx";
import SortMenu from "./menus/sort-menu.tsx";
import {UsersListProvider} from "../../../../../contexts/users_list_context.tsx";


interface ContentProps{

}
const Content : React.FC<ContentProps> = ({}) => {
    const {currentUser} = useUser();
    const {currentTasks} = useTasks();

    const isDarkMode = currentUser.settings.isDarkMode;

    const {filterMenuOpen, sortMenuOpen, addTaskMenuOpen, toggleMenu} = useMenuHandlers();

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
                    <UsersListProvider>
                        <TasksTable currentTasks={currentTasks}/>
                    </UsersListProvider>
                }
            </div>
        </div>
    )
}

export default Content;
