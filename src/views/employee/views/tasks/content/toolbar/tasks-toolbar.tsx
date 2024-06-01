import React from "react";
import {EmployeeInterface} from "../../../../../../interfaces";

import AddIconDark from '../../../../../../../assets/icons/dark_mode/add.svg'
import FilterIconDark from '../../../../../../../assets/icons/dark_mode/filter.svg'
import SortIconDark from '../../../../../../../assets/icons/dark_mode/sort.svg'
import AddIconLight from '../../../../../../../assets/icons/light_mode/add.svg'
import FilterIconLight from '../../../../../../../assets/icons/light_mode/filter.svg'
import SortIconLight from '../../../../../../../assets/icons/light_mode/sort.svg'
import SearchBar from "../../../../../../components/inputs/search-bar.tsx";
interface TasksToolbarProps {
    currentUser: EmployeeInterface
    setAddTaskMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TasksToolbar : React.FC<TasksToolbarProps> = (
    {
        currentUser,
        setAddTaskMenuOpen
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    const handleOpenAddTaskMenu = () => {
        setAddTaskMenuOpen(true);
    }

    return(
        <div id={"tasks-toolbar"} className={isDarkMode ? "tasks-toolbar-dark" : "tasks-toolbar-light"}>
            <div className={"toolbar-container"}>
                <div className={"toolbar-container-left"}>
                    <button onClick={handleOpenAddTaskMenu} className={`toolbar-button ${isDarkMode ? "toolbar-button-dark" : "toolbar-button-light"}`}>
                        <img className={"toolbar-button-icon"} src={isDarkMode ? AddIconDark : AddIconLight}
                             alt="Add icon"/>
                        <h4 className={"toolbar-button-text"}>Add Task</h4>
                    </button>
                </div>
                <div className={"toolbar-container-center"}>
                    <SearchBar className={"tasks-table-search"}/>
                </div>
                <div className={"toolbar-container-right"}>
                    <button className={`toolbar-button ${isDarkMode ? "toolbar-button-dark" : "toolbar-button-light"}`}>
                        <img className={"toolbar-button-icon"} src={isDarkMode ? FilterIconDark : FilterIconLight}
                             alt="Add icon"/>
                        <h4 className={"toolbar-button-text"}>Filter</h4>
                    </button>
                    <button className={`toolbar-button ${isDarkMode ? "toolbar-button-dark" : "toolbar-button-light"}`}>
                        <img className={"toolbar-button-icon"} src={isDarkMode ? SortIconDark : SortIconLight}
                             alt="Add icon"/>
                        <h4 className={"toolbar-button-text"}>Sort</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TasksToolbar;