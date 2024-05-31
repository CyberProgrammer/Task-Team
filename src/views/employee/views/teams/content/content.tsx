import React from "react";
import {EmployeeInterface} from "../../../../../interfaces";

interface ContentProps{
    currentUser: EmployeeInterface;
}
const Content : React.FC<ContentProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    return(
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-teams"}>
                <h1>Employee teams</h1>
            </div>
        </div>
    )
}

export default Content;
