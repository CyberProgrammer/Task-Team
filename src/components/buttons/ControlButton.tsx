import React from "react";

interface ControlButtonProps {
    text: string;
}
const ControlButton : React.FC<ControlButtonProps> = ({text}) => {

    return(
        <button className={"primaryControlButton"}>
            {text}
        </button>
    )
}

export default ControlButton;
