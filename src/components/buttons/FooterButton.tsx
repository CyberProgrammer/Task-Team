import React from "react";

interface FooterButtonProps {
    icon: string;
    text: string;
    setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}

const FooterButton : React.FC<FooterButtonProps> = ({icon, text, setSelectedSection}) => {
    const handleClick = () => {
        setSelectedSection(text)
    }

    return(
        <button id={"footer-button"} onClick={handleClick}>
            <img className={"icon"} src={icon} alt={text} />
        </button>
    )
}

export default FooterButton;