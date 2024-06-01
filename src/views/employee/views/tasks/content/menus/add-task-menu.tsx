import React from "react";
import {EmployeeInterface} from "../../../../../../interfaces";

interface AddTaskMenuProps {
    currentUser: EmployeeInterface
    setAddTaskMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTaskMenu : React.FC<AddTaskMenuProps> = (
    {
        currentUser,
        setAddTaskMenuOpen
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    const  handleCloseClick = () => {
        setAddTaskMenuOpen(false);
    }

    return(
        <div id={"add-task-menu"}>
            <p>Add menu</p>
            <button onClick={handleCloseClick}>
                Close
            </button>
        </div>
    )
}

export default AddTaskMenu;