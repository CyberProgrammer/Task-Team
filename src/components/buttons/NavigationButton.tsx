import React from "react";
import {useNavigate} from "react-router-dom";
import {useUser} from "../../contexts/user_context.tsx";

interface ControlButtonProps {
    icon: string;
    isSelected: boolean
    text: string
    path: string
}
const NavigationButton : React.FC<ControlButtonProps> = ({icon, isSelected, text, path}) => {
    const {currentUser} = useUser();

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
