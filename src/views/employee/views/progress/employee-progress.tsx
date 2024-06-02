import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import Content from "./content/content.tsx"
interface EmployeeProgressProps{
}
const EmployeeProgress : React.FC<EmployeeProgressProps> = ({}) => {

    return(
        <div id={"employee-container"}>
            <EmployeeNavigation />
            <Content />
        </div>
    )
}

export default EmployeeProgress;