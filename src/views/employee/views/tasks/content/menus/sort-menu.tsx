import React from "react"
import {useUser} from "../../../../../../contexts/user.tsx";

interface SortMenuProps {
}
const SortMenu : React.FC<SortMenuProps> = ({}) => {
    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div className={`menu ${isDarkMode ? "menu-dark" : "menu-light"}`}>
            <h1>Sort</h1>
        </div>
    )
}

export default SortMenu;