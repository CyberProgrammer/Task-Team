import React from "react";
import Navigation from "../../navigation/navigation.tsx";
import Content from "./content/content.tsx"
interface EmployeeHistoryProps{

}
const HistoryView : React.FC<EmployeeHistoryProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <Navigation />
            <Content />
        </div>
    )
}

export default HistoryView;