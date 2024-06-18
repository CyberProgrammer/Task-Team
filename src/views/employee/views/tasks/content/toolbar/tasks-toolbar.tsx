import React from "react";

import AddIconDark from '../../../../../../../assets/icons/dark_mode/add.svg'
import FilterIconDark from '../../../../../../../assets/icons/dark_mode/filter.svg'
import SortIconDark from '../../../../../../../assets/icons/dark_mode/sort.svg'
import AddIconLight from '../../../../../../../assets/icons/light_mode/add.svg'
import FilterIconLight from '../../../../../../../assets/icons/light_mode/filter.svg'
import SortIconLight from '../../../../../../../assets/icons/light_mode/sort.svg'
import SearchBar from "../../../../../../components/inputs/search-bar.tsx";
import {useUser} from "../../../../../../contexts/user.tsx";
import TableControlButton from "../../../../../../components/buttons/TableControlButton.tsx";

interface TasksToolbarProps {
    handleAddTaskMenu: () => void
    handleOpenFilterMenu: () => void
    handleSortMenu: () => void
}

const TasksToolbar : React.FC<TasksToolbarProps> = (
    {
        handleAddTaskMenu,
        handleOpenFilterMenu,
        handleSortMenu
    }) => {

    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    return(
        <div id={"tasks-toolbar"} className={isDarkMode ? "tasks-toolbar-dark" : "tasks-toolbar-light"}>
            <div className={"toolbar-container"}>
                <div className={"toolbar-container-left"}>
                    <TableControlButton clickEvent={handleAddTaskMenu} isDarkMode={isDarkMode} iconDark={AddIconDark} iconLight={AddIconLight} text={"Add Task"} />
                </div>
                <div className={"toolbar-container-right"}>
                    <SearchBar className={"tasks-table-search"}/>
                    <TableControlButton clickEvent={handleOpenFilterMenu} isDarkMode={isDarkMode} iconDark={FilterIconDark} iconLight={FilterIconLight} text={"Filter"} />
                    <TableControlButton clickEvent={handleSortMenu} isDarkMode={isDarkMode} iconDark={SortIconDark} iconLight={SortIconLight} text={"Sort"} />
                </div>
            </div>
        </div>
    )
}

export default TasksToolbar;