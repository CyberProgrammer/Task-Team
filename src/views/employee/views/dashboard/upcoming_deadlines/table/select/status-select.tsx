import React, {useEffect, useState} from "react";
import {EmployeeInterface} from "../../../../../../../interfaces";

interface StatusSelectProps{
    currentUser: EmployeeInterface
    taskStatus: string
}
const StatusSelect : React.FC<StatusSelectProps> = (
    {
        currentUser,
        taskStatus
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;
    const [statusClass, setStatusClass] = useState(taskStatus);

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        if (newStatus === "done") setStatusClass("status-option-done");
        else if (newStatus === "progress") setStatusClass("status-option-progress");
        else setStatusClass("status-option-not-started");
    }
    useEffect(() => {
        if (taskStatus === "done") setStatusClass("status-option-done");
        else if (taskStatus === "progress") setStatusClass("status-option-progress");
        else setStatusClass("status-option-not-started");
    }, [taskStatus]);

    return (
        <select className={`status-select ${statusClass} ${isDarkMode ? "select-dark" : "select-light"}`}
                defaultValue={taskStatus} onChange={handleStatusChange}>
            <option className={"status-option-done"} value={"done"}>Done</option>
            <option className={"status-option-progress"} value={"progress"}>In progress</option>
            <option className={"status-option-not-started"} value={"not-started"}>Not started</option>
        </select>
    )
}

export default StatusSelect;