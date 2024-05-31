import React from "react";
import {EmployeeInterface} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface ControlButtonProps {
    icon: string;
    isSelected: boolean
    text: string
    path: string
    currentUser: EmployeeInterface
}
const NavigationButton : React.FC<ControlButtonProps> = ({currentUser, icon, isSelected, text, path}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    const isDarkMode = currentUser.settings.isDarkMode

    return (
        <button className={`${isDarkMode ? "darkControlButton" : "lightControlButton"} ${isSelected ? (isDarkMode ? "selected-dark" : "selected-light") : ""}`} onClick={handleClick}>
            <div className="icon-div">
                <img src={icon} alt="icon"/>
            </div>
            <div className="text-div">
                {text}
            </div>
        </button>
    )
}

export default NavigationButton;
