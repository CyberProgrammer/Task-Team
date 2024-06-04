import React, {useEffect, useState} from "react";
import DeadlineTableRow from "./rows/deadline-table-row.tsx";
import {useUser} from "../../../../../../contexts/user_context.tsx";
import {useTasks} from "../../../../../../contexts/task_list_context.tsx";
import {TasksInterface} from "../../../../../../interfaces";
import {getDaysBetweenDates, convertToLocalTime} from "../../../../../../utils/dateUtils.ts";

interface DeadlineTableProps {

}
const DeadlineTable : React.FC<DeadlineTableProps> = ({}) => {
    const {currentUser} = useUser();
    const {currentTasks} = useTasks();
    const isDarkMode = currentUser.settings.isDarkMode;

    const [upcomingTasks, setUpcomingTasks] = useState<TasksInterface[]>([]);

    const currentISODate = new Date().toISOString();
    useEffect(() => {
        currentTasks.map((task ) => {
            if(getDaysBetweenDates(currentISODate, task.dueDate) <= 7 && getDaysBetweenDates(currentISODate, task.dueDate) >= 0){
                setUpcomingTasks(prevState => [...prevState, task]);
            }
        })
    }, []);

    return (
        <div id={"deadline-table"} className={isDarkMode ? "deadline-table-dark" : "deadline-table-light"}>
            <div className={"deadline-table-head"}>
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
            <div className={"deadline-table-rows"}>
                {upcomingTasks.map((task, index) => (
                    <DeadlineTableRow currentUser={currentUser} key={task.id} taskTitle={task.title} taskAssignee={task.assignee} taskDueDate={convertToLocalTime(task.dueDate)} taskStatus={task.status} taskPriority={task.priority}/>
                ))}
            </div>
        </div>
    )
}

export default DeadlineTable;