import React from "react";

interface PriorityOptionProps {
    text: string;
    value: string;
    isDarkMode: boolean;
}
const PriorityOption : React.FC<PriorityOptionProps> = (
    {
        text,
        value,
        isDarkMode
    }) => {

    return (
        <option className={isDarkMode ? `priority-option-${value}-dark` : `priority-option-${value}-light`}
                value={value}>{text}</option>
    )
}

export default PriorityOption;