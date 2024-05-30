import React from "react";

import './analytics-wrapper.css'
import {EmployeeInterface} from "../../../../../interfaces";
import DoughnutChart from "./charts/doughnut-chart.tsx";

interface AnalyticsWrapperProps {
    currentUser: EmployeeInterface
}

const AnalyticsWrapper : React.FC<AnalyticsWrapperProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    const tasksAssignedCount = 5;
    const tasksInProgressCount = 10;
    const tasksCompletedCount = 5;

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
                    <DoughnutChart />
                </div>
            </div>
        </div>
    )
}

export default AnalyticsWrapper;