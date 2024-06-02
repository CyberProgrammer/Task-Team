import React from "react";
import EmployeeNavigation from "../../navigation/employee-navigation.tsx";
import Content from "./content/content.tsx"
interface EmployeeHistoryProps{

}
const EmployeeHistory : React.FC<EmployeeHistoryProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <EmployeeNavigation />
            <Content />
        </div>
    )
}

export default EmployeeHistory;