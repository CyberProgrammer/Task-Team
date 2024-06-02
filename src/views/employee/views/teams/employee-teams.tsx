import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";

import Content from "./content/content.tsx"

interface EmployeeTeamsProps{

}
const EmployeeTeams : React.FC<EmployeeTeamsProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation />
            <Content />
        </div>
    )
}

export default EmployeeTeams;