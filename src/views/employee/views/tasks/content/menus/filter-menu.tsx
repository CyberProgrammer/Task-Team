import React from "react";
import {EmployeeInterface} from "../../../../../../interfaces";
import useFilterHandlers from "../../functions/handleFilterOptions.tsx";

interface FilterMenuProps {
    currentUser: EmployeeInterface
}
const FilterMenu : React.FC<FilterMenuProps> = (
    {
        currentUser,
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    const {selectedStatusFilter, selectedPriorityFilter, selectedAssigneeFilter, handleStatusChange, handlePriorityChange, handleAssigneeChange,} = useFilterHandlers()

    return (
        <div className={`menu ${isDarkMode ? "menu-dark" : "menu-light"}`}>
            <h5>Status</h5>
            <select id="status" onChange={handleStatusChange} value={selectedStatusFilter}>
                <option value="default">Default</option>
                <option value="done">Done</option>
                <option value="progress">In Progress</option>
                <option value="not-started">Not Started</option>
            </select>

            <h5>Priority</h5>
            <select id="priority" onChange={handlePriorityChange} value={selectedPriorityFilter}>
                <option value="default">Default</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <h5>Assignee</h5>
            <select id="assignee" onChange={handleAssigneeChange} value={selectedAssigneeFilter}>
                <option value="default">Default</option>
                <option>John Doe</option>
                <option>Bill Doe</option>
                <option>Jacob Doe</option>
            </select>
        </div>
    )
}

export default FilterMenu;
