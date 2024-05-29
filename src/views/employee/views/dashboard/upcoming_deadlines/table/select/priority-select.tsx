import React, {useEffect, useState} from "react";
import {EmployeeInterface} from "../../../../../../../interfaces";

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
        <select className={`priority-select ${priorityClass} ${isDarkMode ? "select-dark" : "select-light"}`} defaultValue={taskPriority}
                onChange={handlePriorityChange}>
            <option className={"priority-option-low"} value={"low"}>Low</option>
            <option className={"priority-option-med"} value={"med"}>Med</option>
            <option className={"priority-option-high"} value={"high"}>High</option>
        </select>
    )
}

export default PrioritySelect;