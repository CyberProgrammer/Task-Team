import React from "react";
import "./tasks-table.css";

import { ArchivedTasksInterface, TasksInterface } from "../../interfaces";
import TasksTableHead from "./head/tasks-table-head.tsx";
import TasksTableRow from "./row/tasks-table-row.tsx";

import { useUser } from "../../contexts/user_context.tsx";
import { getFullName } from "../../utils/getFullName.ts";
import { convertToLocalTime } from "../../utils/dateUtils.ts";
import { archivedTasksList } from "../../data/constants.ts";

interface TasksTableProps {
    type: string;
    currentTasks: TasksInterface[];
}
const TasksTable: React.FC<TasksTableProps> = ({ type, currentTasks }) => {
    const { currentUser } = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    const renderTasks = () => (
        <>
            {(type !== "archived" ? currentTasks : archivedTasksList).map((task, index) => (
                <TasksTableRow
                    key={index}
                    type={type}
                    title={task.title}
                    assignee={getFullName(task) || "Unassigned"}
                    dueDate={convertToLocalTime(task.dueDate)}
                    taskStatus={task.status}
                    taskPriority={task.priority}
                    archived_on={"archived_on" in task ? (task as ArchivedTasksInterface).archived_on : undefined}
                />
            ))}
        </>
    );

    return (
        <div id="tasks-table" className={isDarkMode ? "tasks-table-dark" : "tasks-table-light"}>
            <div className={`tasks-table-head ${isDarkMode ? "tasks-table-head-dark" : "tasks-table-head-light"}`}>
                <TasksTableHead  type={type}/>
            </div>
            <div className="tasks-table-rows">
                {renderTasks()}
            </div>
        </div>
    );
};

export default TasksTable;

