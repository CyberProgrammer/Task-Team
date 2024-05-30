import React from "react";
import {EmployeeInterface} from "../../../../interfaces";

import './employee-dashboard.css'

// @ts-ignore
import NotificationReadIconLight from '../../../../../assets/icons/light_mode/notification_read.svg';
import NotificationUnreadIconLight from '../../../../../assets/icons/light_mode/notification_unread.svg';
import NotificationReadIconDark from '../../../../../assets/icons/dark_mode/notification_read.svg';
import NotificationUnreadIconDark from '../../../../../assets/icons/dark_mode/notification_unread.svg';

import SearchBar from "../../../../components/inputs/search-bar.tsx";
import AnalyticsWrapper from "./analytics/analytics-wrapper.tsx";
import UpcomingDeadline from "./upcoming_deadlines/upcoming-deadlines.tsx";

interface EmployeeDashboardProps {
    currentUser: EmployeeInterface;
}
const EmployeeDashboard : React.FC<EmployeeDashboardProps> = (
    {
        currentUser,
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode
    const isUnreadNotification = true

    return (
        <div id={"employee-dashboard"}>
            <div className={`toolbar ${isDarkMode ? "toolbar-dark" : "toolbar-light"}`}>
                <div className={"toolbar-left"}>
                    <h2>Welcome, {currentUser.fullName}</h2>
                </div>
                <div className={"toolbar-right"}>
                    <SearchBar/>
                    <img className={"icon"}
                         src={isDarkMode ?
                                isUnreadNotification ? NotificationUnreadIconDark : NotificationReadIconDark
                                :
                                isUnreadNotification ? NotificationUnreadIconLight : NotificationReadIconLight
                             }
                         alt={"Notification"}
                         onClick={() => console.log("Clicked notifications button...")}
                    />
                </div>
            </div>
            <div className={"container"}>
                <AnalyticsWrapper currentUser={currentUser} />
                <UpcomingDeadline currentUser={currentUser} />
            </div>
        </div>
    )
}

export default EmployeeDashboard;