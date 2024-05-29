import React from "react";

import './analytics-wrapper.css'
import {EmployeeInterface} from "../../../../../interfaces";

interface AnalyticsWrapperProps {
    currentUser: EmployeeInterface
}

const AnalyticsWrapper : React.FC<AnalyticsWrapperProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return (
        <div id={"analytics-wrapper"} className={isDarkMode ? "analytics-dark" : "analytics-light"}>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <h3>Tasks assigned</h3>
                <div className={"card-content"}>

                </div>
            </div>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <h3>Tasks in progress</h3>
                <div className={"card-content"}>

                </div>
            </div>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <h3>Tasks completed</h3>
                <div className={"card-content"}>

                </div>
            </div>
            <div id={"data-card"} className={isDarkMode ? "data-card-dark" : "data-card-light"}>
                <h3>Completion percentage</h3>
                <div className={"card-content"}>

                </div>
            </div>
        </div>
    )
}

export default AnalyticsWrapper;