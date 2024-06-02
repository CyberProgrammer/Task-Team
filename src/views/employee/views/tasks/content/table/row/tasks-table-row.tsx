import React from "react";
import StatusSelect from "../../../../../../../components/select/status-select.tsx";
import PrioritySelect from "../../../../../../../components/select/priority-select.tsx";
import {useUser} from "../../../../../../../contexts/user_context.tsx";

interface TasksTableRowProps {
    title: string
    assignee: string
    dueDate: string
    taskStatus: string
    taskPriority: string
}
const TasksTableRow : React.FC<TasksTableRowProps> = (
    {
        title,
        assignee,
        dueDate,
        taskStatus,
        taskPriority
    }) => {

    const {currentUser} = useUser();
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
                <StatusSelect taskStatus={taskStatus}/>
            </div>
            <div className={"col-5"}>
                <PrioritySelect taskPriority={taskPriority}/>
            </div>
        </div>
    )
}

export default TasksTableRow;