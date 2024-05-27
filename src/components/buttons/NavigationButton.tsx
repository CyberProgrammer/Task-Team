import React from "react";

interface ControlButtonProps {
    icon: string;
    isSelected: boolean
    text: string
    setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}

const NavigationButton : React.FC<ControlButtonProps> = ({icon, isSelected, text, setSelectedSection}) => {
    const handleClick = () => {
        setSelectedSection(text)
    }

    return(
        <button className={`primaryControlButton ${isSelected ? "selected" : ""}`} onClick={handleClick}>
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
