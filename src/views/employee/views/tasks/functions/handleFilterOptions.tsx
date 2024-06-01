import React, { useState } from "react";

const useFilterHandlers = () => {
    const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("default");
    const [selectedPriorityFilter, setSelectedPriorityFilter] = useState<string>("default");
    const [selectedAssigneeFilter, setSelectedAssigneeFilter] = useState<string>("default");

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatusFilter(event.target.value);
        console.log(event.target.value);
    }

    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPriorityFilter(event.target.value);
        console.log(event.target.value);
    }

    const handleAssigneeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAssigneeFilter(event.target.value);
        console.log(event.target.value);
    }

    return {
        selectedStatusFilter,
        selectedPriorityFilter,
        selectedAssigneeFilter,
        handleStatusChange,
        handlePriorityChange,
        handleAssigneeChange,
    };
};

export default useFilterHandlers;
