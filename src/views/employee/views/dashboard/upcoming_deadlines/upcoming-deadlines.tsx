import React from "react";

import './upcoming-deadlines.css'

import {EmployeeInterface} from "../../../../../interfaces";
import DeadlineTable from "./table/deadline-table.tsx";

interface UpcomingDeadlineProps {
    currentUser: EmployeeInterface
}
const UpcomingDeadline : React.FC<UpcomingDeadlineProps> = (
    {
        currentUser,
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return(
        <div id={"upcoming-deadline-wrapper"} className={isDarkMode ? "deadline-wrapper-dark" : "deadline-wrapper-light"}>
            <div className={"header"}>
                <h3>Upcoming deadlines</h3>
            </div>
            <DeadlineTable currentUser={currentUser} />
        </div>
    )
}

export default UpcomingDeadline;