import React from "react";
import {EmployeeInterface} from "../../../../../interfaces";

interface UpcomingDeadlineProps {
    currentUser: EmployeeInterface
}

const UpcomingDeadline : React.FC<UpcomingDeadlineProps> = (
    {
        currentUser,
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return(
        <div id={"upcoming-deadline-wrapper"}>

        </div>
    )
}

export default UpcomingDeadline;