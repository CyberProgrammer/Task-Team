import React from "react";
import {EmployeeInterface} from "../../../../../../interfaces";

interface FilterMenuProps {
    currentUser: EmployeeInterface
}
const FilterMenu : React.FC<FilterMenuProps> = (
    {
        currentUser,
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div className={`menu ${isDarkMode ? "menu-dark" : "menu-light"}`}>
            <h1>Filter</h1>
        </div>
    )
}

export default FilterMenu;
