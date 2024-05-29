import React from "react";
import {EmployeeInterface} from "../../../../../../../interfaces";
import StatusSelect from "../select/status-select.tsx";
import PrioritySelect from "../select/priority-select.tsx";

interface DeadlineTableRowProps {
    currentUser: EmployeeInterface
    taskTitle: string
    taskAssignee: string
    taskDueDate: string
    taskStatus: string
    taskPriority: string
}

const DeadlineTableRow : React.FC<DeadlineTableRowProps> = (
    {
        currentUser,
        taskTitle,
        taskAssignee,
        taskDueDate,
        taskStatus,
        taskPriority
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return (
        <div className={`deadline-table-row ${isDarkMode ? "deadline-table-row-dark" : "deadline-table-row-light"}`}>
            <div className={"col-1"}>
                <p>{taskTitle}</p>
            </div>
            <div className={"col-2"}>
                <p>{taskAssignee}</p>
            </div>
            <div className={"col-3"}>
                <p>{taskDueDate}</p>
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

export default DeadlineTableRow;