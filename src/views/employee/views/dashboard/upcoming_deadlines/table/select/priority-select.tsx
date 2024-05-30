import React, {useEffect, useState} from "react";
import {EmployeeInterface} from "../../../../../../../interfaces";
import PriorityOption from "./priority-option.tsx";

interface PrioritySelectProps {
    currentUser: EmployeeInterface
    taskPriority: string
}
const PrioritySelect : React.FC<PrioritySelectProps> = (
    {
        currentUser,
        taskPriority
    }) => {
    const isDarkMode = currentUser.settings.isDarkMode

    const [priorityClass, setPriorityClass] = useState(taskPriority);
    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = event.target.value;
        if (newPriority === "low") setPriorityClass("priority-option-low");
        else if (newPriority === "med") setPriorityClass("priority-option-med");
        else setPriorityClass("priority-option-high");
    };
    useEffect(() => {
        if (taskPriority === "low") setPriorityClass("priority-option-low");
        else if (taskPriority === "med") setPriorityClass("priority-option-med");
        else setPriorityClass("priority-option-high");
    }, [taskPriority]);

    return (
        <select className={`priority-select ${priorityClass}${isDarkMode ? "-dark" : "-light"} ${isDarkMode ? "select-dark" : "select-light"}`} defaultValue={taskPriority}
                onChange={handlePriorityChange}>
            <PriorityOption text={"Low"} value={"low"} isDarkMode={isDarkMode} />
            <PriorityOption text={"Med"} value={"med"} isDarkMode={isDarkMode} />
            <PriorityOption text={"High"} value={"high"} isDarkMode={isDarkMode} />
        </select>
    )
}

export default PrioritySelect;