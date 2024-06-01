import React from "react";
import {EmployeeInterface} from "../../../../../../interfaces";

interface AddTaskMenuProps {
    currentUser: EmployeeInterface
    toggleAddTaskMenu: () => void;
}

const AddTaskMenu : React.FC<AddTaskMenuProps> = (
    {
        currentUser,
        toggleAddTaskMenu
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    return(
        <div id={"add-task-menu"}>
            <p>Add menu</p>
            <button onClick={toggleAddTaskMenu}>
                Close
            </button>
        </div>
    )
}

export default AddTaskMenu;