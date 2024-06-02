import React from "react";
import {useUser} from "../../../../../../contexts/user_context.tsx";

interface AddTaskMenuProps {
    toggleAddTaskMenu: () => void;
}

const AddTaskMenu : React.FC<AddTaskMenuProps> = (
    {
        toggleAddTaskMenu,
    }) => {

    const {currentUser} = useUser();
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