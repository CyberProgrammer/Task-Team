import React from "react";

import './dashboard-view.css'
import '../../main-view.css'

// @ts-ignore
import NotificationReadIconLight from '../../../../../assets/icons/light_mode/notification_read.svg';
import Navigation from "../../navigation/navigation.tsx";
import Content from "./content/content.tsx";

interface EmployeeDashboardProps {

}
const DashboardView : React.FC<EmployeeDashboardProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <Navigation />
            <Content />
        </div>
    )
}

export default DashboardView;