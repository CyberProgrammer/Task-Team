import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import {EmployeeInterface} from "../../../../interfaces";
import Content from "./content/content.tsx"

interface EmployeeTeamsProps{
    currentUser: EmployeeInterface;
}
const EmployeeTeams : React.FC<EmployeeTeamsProps> = (
    {
        currentUser
    }) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation currentUser={currentUser}/>
            <Content currentUser={currentUser}/>
        </div>
    )
}

export default EmployeeTeams;