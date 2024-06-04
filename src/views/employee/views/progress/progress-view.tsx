import React from "react";
import Navigation from "../../navigation/navigation.tsx";
import Content from "./content/content.tsx"
interface EmployeeProgressProps{
}
const ProgressView : React.FC<EmployeeProgressProps> = ({}) => {

    return(
        <div id={"employee-container"}>
            <Navigation />
            <Content />
        </div>
    )
}

export default ProgressView;