import React from "react";
import StatusSelect from "../../../../dashboard/upcoming_deadlines/table/select/status-select.tsx";
import PrioritySelect from "../../../../dashboard/upcoming_deadlines/table/select/priority-select.tsx";
import {EmployeeInterface} from "../../../../../../../interfaces";

interface TasksTableRowProps {
    currentUser: EmployeeInterface
    title: string
    assignee: string
    dueDate: string
    taskStatus: string
    taskPriority: string
}
const TasksTableRow : React.FC<TasksTableRowProps> = (
    {
        currentUser,
        title,
        assignee,
        dueDate,
        taskStatus,
        taskPriority
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div
            className={`tasks-table-row ${isDarkMode ? "tasks-table-row-dark" : "tasks-table-row-light"}`}>
            <div className={"col-1"}>
                <p>{title}</p>
            </div>
            <div className={"col-2"}>
                <p>{assignee}</p>
            </div>
            <div className={"col-3"}>
                <p>{dueDate}</p>
            </div>
            <div className={"col-4"}>
                <StatusSelect currentUser={currentUser} taskStatus={taskStatus}/>
            </div>
            <div className={"col-5"}>
                <PrioritySelect currentUser={currentUser} taskPriority={taskPriority}/>
            </div>
        </div>
    )
}

export default TasksTableRow;