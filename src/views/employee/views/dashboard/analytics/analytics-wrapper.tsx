import React from "react";

import './analytics-wrapper.css'
import DoughnutChart from "./charts/doughnut-chart.tsx";
import {useUser} from "../../../../../contexts/user.tsx";
import {useTasks} from "../../../../../contexts/tasks.tsx";

interface AnalyticsWrapperProps {
}

const AnalyticsWrapper : React.FC<AnalyticsWrapperProps> = ({}) => {

    const {currentUser} = useUser();
    const {currentTasks} = useTasks();

    const isDarkMode = currentUser.settings.isDarkMode

    const tasksAssignedCount = currentTasks.filter((task) => task.assigned_to === currentUser.id).length;
    const tasksInProgressCount = currentTasks.filter((task) => task.status != "done").length;
    const tasksCompletedCount = currentTasks.filter((task) => task.status === "done").length;;

    return (
        <div id={"analytics-wrapper"} className={isDarkMode ? "analytics-dark" : "analytics-light"}>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <div className={"data-card-header"}>
                    <h3>Tasks assigned</h3>
                </div>
                <div className={"data-card-content"}>
                    <h1 className={"text"}>{tasksAssignedCount}</h1>
                </div>
            </div>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <div className={"data-card-header"}>
                    <h3>Tasks in progress</h3>
                </div>
                <div className={"data-card-content"}>
                    <h1 className={"text"}>{tasksInProgressCount}</h1>
                </div>
            </div>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <div className={"data-card-header"}>
                    <h3>Tasks completed</h3>
                </div>
                <div className={"data-card-content"}>
                    <h1 className={"text"}>{tasksCompletedCount}</h1>
                </div>
            </div>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <div className={"data-card-header"}>
                    <h3>Completion percentage</h3>
                </div>
                <div className={"data-card-content"}>
                    <DoughnutChart tasksCompletedCount={tasksCompletedCount} tasksInProgressCount={tasksInProgressCount}/>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsWrapper;