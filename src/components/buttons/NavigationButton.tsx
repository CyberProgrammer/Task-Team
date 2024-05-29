import React from "react";
import {EmployeeInterface} from "../../interfaces";

interface ControlButtonProps {
    icon: string;
    isSelected: boolean
    text: string
    setSelectedSection: React.Dispatch<React.SetStateAction<string>>
    currentUser: EmployeeInterface
}
const NavigationButton : React.FC<ControlButtonProps> = ({currentUser, icon, isSelected, text, setSelectedSection}) => {
    const handleClick = () => {
        setSelectedSection(text)
    }

    const isDarkMode = currentUser.settings.isDarkMode

    return(
        <button className={`${isDarkMode ? "darkControlButton" : "lightControlButton"} ${isSelected ? isDarkMode ? "selected-dark" : "selected-light" : ""}`} onClick={handleClick}>
            <div className={"icon-div"}>
                <img src={icon} alt="icon"/>
            </div>
            <div className={"text-div"}>
                {text}
            </div>
        </button>
    )
}

export default NavigationButton;
