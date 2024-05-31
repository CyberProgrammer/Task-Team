import React from "react";
import {EmployeeInterface} from "../../../../interfaces";

import './employee-dashboard.css'
import '../../employee-view.css'
// @ts-ignore
import NotificationReadIconLight from '../../../../../assets/icons/light_mode/notification_read.svg';
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import Content from "./content/content.tsx";

interface EmployeeDashboardProps {
    currentUser: EmployeeInterface;
}
const EmployeeDashboard : React.FC<EmployeeDashboardProps> = (
    {
        currentUser,
    }) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation currentUser={currentUser}/>
            <Content currentUser={currentUser} />
        </div>
    )
}

export default EmployeeDashboard;