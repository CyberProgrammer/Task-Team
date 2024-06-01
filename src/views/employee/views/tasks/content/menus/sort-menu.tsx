import React from "react"
import {EmployeeInterface} from "../../../../../../interfaces";

interface SortMenuProps {
    currentUser: EmployeeInterface
}
const SortMenu : React.FC<SortMenuProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div className={`menu ${isDarkMode ? "menu-dark" : "menu-light"}`}>
            <h1>Sort</h1>
        </div>
    )
}

export default SortMenu;