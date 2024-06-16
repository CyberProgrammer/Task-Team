import React from "react";
import {useUser} from "../../../../../../contexts/user.tsx";
import {useTasks} from "../../../../../../contexts/tasks.tsx";
import {TasksInterface} from "../../../../../../interfaces";

interface AddTaskMenuProps {
    toggleAddTaskMenu: () => void;
}

const AddTaskMenu : React.FC<AddTaskMenuProps> = (
    {
        toggleAddTaskMenu,
    }) => {

    const {currentUser} = useUser();
    const {currentTasks,updateTasks} = useTasks();
    const isDarkMode = currentUser.settings.isDarkMode;

    function handleNewTask (newTask: TasksInterface){
        const updatedTasks = [...currentTasks, newTask];
        updateTasks(updatedTasks);
        toggleAddTaskMenu();
    }

    // Testing
    const newTask = {
        id: 24,
        title: "Testing app Add button",
        assignee: "auth0|665cf1aa4c131177be6692de",
        assigned_to: "auth0|665cf1aa4c131177be6692de",
        dueDate: "2024-06-09T14:30:00.000Z",
        status: "progress",
        priority: "med"
    }

    return(
        <div id={"add-task-menu"}>
            <p>Add menu</p>
            <button onClick={() => handleNewTask(newTask)}>
                Add new task
            </button>
            <button onClick={toggleAddTaskMenu}>
                Close
            </button>
        </div>
    )
}

export default AddTaskMenu;