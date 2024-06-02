import React from "react";

import {useUser} from "../../../../../../contexts/user_context.tsx";
import {useUsersList} from "../../../../../../contexts/users_list_context.tsx";

import "./tasks-table.css"

import {TasksInterface} from "../../../../../../interfaces";
import TasksTableRow from "./row/tasks-table-row.tsx";


interface TasksTableProps{
    currentTasks: TasksInterface[]
}
const TasksTable : React.FC<TasksTableProps> = (
    {
        currentTasks,
    }) => {

    const {currentUser} = useUser();
    const {currentUsers} = useUsersList();

    const isDarkMode = currentUser.settings.isDarkMode;

    return(
        <div id={"tasks-table"} className={isDarkMode ? "tasks-table-dark" : "tasks-table-light"}>
            <div className={`tasks-table-head ${isDarkMode ? "tasks-table-head-dark" : "tasks-table-head-light"}`}>
                <ul>
                    <li className={"col-1"}>
                        <h4>Task name</h4>
                    </li>
                    <li className={"col-2"}>
                        <h4>Assignee</h4>
                    </li>
                    <li className={"col-3"}>
                        <h4>Due date</h4>
                    </li>
                    <li className={"col-4"}>
                        <h4>Status</h4>
                    </li>
                    <li className={"col-5"}>
                        <h4>Priority</h4>
                    </li>
                </ul>
            </div>
            <div className={"tasks-table-rows"}>
                {currentTasks.map((task, index) => {
                    const foundAssignee = currentUsers.find(user => {
                        console.log(`Comparing task.assignee: ${task.assignee} with user.id: ${user.id}`);
                        return user.id === task.assignee;
                    })

                    if(!foundAssignee){
                        console.log("No Assignee found.");
                        return null;
                    }

                    let fullName = foundAssignee.first_name + " " + foundAssignee.last_name;
                    console.log(`Found assignee for task "${task.title}": ${foundAssignee}`);

                    return (
                        <TasksTableRow
                            key={index}
                            title={task.title}
                            assignee={fullName}
                            dueDate={task.dueDate}
                            taskStatus={task.status}
                            taskPriority={task.priority}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default TasksTable;