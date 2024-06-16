import React, {useEffect, useState} from "react";
import StatusOption from "./status-option.tsx";
import {useUser} from "../../contexts/user.tsx";

interface StatusSelectProps{
    taskStatus: string
}
const StatusSelect : React.FC<StatusSelectProps> = (
    {
        taskStatus
    }) => {

    const {currentUser} = useUser();
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
        <select className={`status-select ${statusClass}${isDarkMode ? "-dark" : "-light"} ${isDarkMode ? "select-dark" : "select-light"}`}
                defaultValue={taskStatus} onChange={handleStatusChange}>
            <StatusOption text={"Done"} value={"done"} isDarkMode={isDarkMode} />
            <StatusOption text={"In progress"} value={"progress"} isDarkMode={isDarkMode} />
            <StatusOption text={"Not started"} value={"not-started"} isDarkMode={isDarkMode} />
        </select>
    )
}

export default StatusSelect;