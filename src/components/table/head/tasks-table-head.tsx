import React from "react";

interface TasksTableHeadProps {
    type: string;
}

const TasksTableHead: React.FC<TasksTableHeadProps> = ({ type }) => (
    <ul>
        <li className="col-1">
            <h4>Task name</h4>
        </li>
        <li className="col-2">
            <h4>Assignee</h4>
        </li>
        <li className="col-3">
            <h4>Due date</h4>
        </li>
        {type !== "archived" ? (
            <>
                <li className="col-4">
                    <h4>Status</h4>
                </li>
                <li className="col-5">
                    <h4>Priority</h4>
                </li>
            </>
        ) : (
            <li className="col-6">
                <h4>Archived On</h4>
            </li>
        )}
    </ul>
);

export default TasksTableHead;
