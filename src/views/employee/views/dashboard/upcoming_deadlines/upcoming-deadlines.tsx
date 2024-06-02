import React from "react";

import './upcoming-deadlines.css'

import DeadlineTable from "./table/deadline-table.tsx";
import {useUser} from "../../../../../contexts/user_context.tsx";

interface UpcomingDeadlineProps {

}
const UpcomingDeadline : React.FC<UpcomingDeadlineProps> = ({}) => {
    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode

    return(
        <div id={"upcoming-deadline-wrapper"} className={isDarkMode ? "deadline-wrapper-dark" : "deadline-wrapper-light"}>
            <div className={"header"}>
                <h3>Upcoming deadlines</h3>
            </div>
            <DeadlineTable />
        </div>
    )
}

export default UpcomingDeadline;