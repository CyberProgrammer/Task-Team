import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import {EmployeeInterface} from "../../../../interfaces";
import Content from "./content/content.tsx"
interface EmployeeProgressProps{
    currentUser: EmployeeInterface;
}
const EmployeeProgress : React.FC<EmployeeProgressProps> = (
    {
        currentUser
    }) => {

    return(
        <div id={"employee-container"}>
            <EmployeeNavigation currentUser={currentUser}/>
            <Content currentUser={currentUser}/>
        </div>
    )
}

export default EmployeeProgress;