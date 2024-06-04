import React from "react";
import Navigation from "../../navigation/navigation.tsx";

import './teams-view.css'

import Content from "./content/content.tsx"

interface EmployeeTeamsProps{

}
const TeamsView : React.FC<EmployeeTeamsProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <Navigation />
            <Content />
        </div>
    )
}

export default TeamsView;