import React from "react";

import './employee-dashboard.css'
import '../../employee-view.css'

// @ts-ignore
import NotificationReadIconLight from '../../../../../assets/icons/light_mode/notification_read.svg';
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import Content from "./content/content.tsx";
import {TaskProvider} from "../../../../contexts/task_list_context.tsx";

interface EmployeeDashboardProps {

}
const EmployeeDashboard : React.FC<EmployeeDashboardProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation />
            <TaskProvider>
                <Content />
            </TaskProvider>
        </div>
    )
}

export default EmployeeDashboard;