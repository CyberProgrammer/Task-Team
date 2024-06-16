import React from "react";
import {EmployeeInterface} from "../../../../../../../interfaces";
import StatusSelect from "../../../../../../../components/select/status-select.tsx";
import PrioritySelect from "../../../../../../../components/select/priority-select.tsx";
import {useUsersList} from "../../../../../../../contexts/users.tsx";

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
    const {currentUsers} = useUsersList();
    const foundUser = currentUsers.find((user) => user.id === taskAssignee);

    return (
        <div className={`deadline-table-row ${isDarkMode ? "deadline-table-row-dark" : "deadline-table-row-light"}`}>
            <div className={"col-1"}>
                <p>{taskTitle}</p>
            </div>
            <div className={"col-2"}>
                <p>{foundUser ? (foundUser.first_name + " " + foundUser.last_name) : "Unknown" }</p>
            </div>
            <div className={"col-3"}>
                <p>{taskDueDate}</p>
            </div>
            <div className={"col-4"}>
                <StatusSelect taskStatus={taskStatus}/>
            </div>
            <div className={"col-5"}>
                <PrioritySelect taskPriority={taskPriority}/>
            </div>
        </div>
    )
}

export default DeadlineTableRow;