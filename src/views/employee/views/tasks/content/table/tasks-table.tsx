import React from "react";

import "./tasks-table.css"

import {EmployeeInterface} from "../../../../../../interfaces";
import TasksTableRow from "./row/tasks-table-row.tsx";

interface TasksTableProps{
    currentUser: EmployeeInterface
}
const TasksTable : React.FC<TasksTableProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    return(
        <div id={"tasks-table"} className={isDarkMode ? "tasks-table-dark" : "tasks-table-light"}>
            <div className={`tasks-table-head ${isDarkMode ? "tasks-table-head-dark" : "tasks-table-head-light"}`}>
                <ul>
                    <li className={"col-1"}>
                        <h4>Task name</h4>
                    </li>
                    <li className={"col-2"}>
                        <h4>Assignee</h4>
                    </li>
                    <li className={"col-3"}>
                        <h4>Due date</h4>
                    </li>
                    <li className={"col-4"}>
                        <h4>Status</h4>
                    </li>
                    <li className={"col-5"}>
                        <h4>Priority</h4>
                    </li>
                </ul>
            </div>
            <div className={"tasks-table-rows"}>
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
                <TasksTableRow currentUser={currentUser} title={"Complete the tasks table"} asignee={"John Doe"} dueDate={"Oct 14th"} taskStatus={"progress"} taskPriority={"low"} />
            </div>
        </div>
    )
}

export default TasksTable;