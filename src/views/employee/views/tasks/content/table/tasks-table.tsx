import React from "react";

import "./tasks-table.css"

import {EmployeeInterface, EmployeeListInterface, TasksInterface} from "../../../../../../interfaces";
import TasksTableRow from "./row/tasks-table-row.tsx";

interface TasksTableProps{
    currentUser: EmployeeInterface
    currentUsers: EmployeeListInterface[]
    currentTasks: TasksInterface[]
}
const TasksTable : React.FC<TasksTableProps> = (
    {
        currentUser,
        currentUsers,
        currentTasks
    }) => {

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
                    })?.fullName || "Unknown";

                    console.log(`Found assignee for task "${task.title}": ${foundAssignee}`);

                    return (
                        <TasksTableRow
                            key={index}
                            currentUser={currentUser}
                            title={task.title}
                            assignee={foundAssignee}
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