import React from "react";
import {Employee} from "../../interfaces";

interface ManagerViewProps {
    currentUser: Employee
}

const ManagerView : React.FC<ManagerViewProps> = (
    {
        currentUser
    }) => {

    return (
        <div id={"manager-dashboard"}>
            <h2>Welcome, {currentUser.fullName}</h2>
        </div>
    )
}

export default ManagerView;