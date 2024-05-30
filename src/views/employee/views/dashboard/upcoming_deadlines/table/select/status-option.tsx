import React from "react";

interface StatusOptionProps {
    text: string;
    value: string;
    isDarkMode: boolean;
}
const StatusOption : React.FC<StatusOptionProps> = (
    {
        text,
        value,
        isDarkMode
    }) => {
    return (
        <option className={isDarkMode ? `status-option-${value}-dark` : `status-option-${value}-light`}
                value={value}>{text}</option>
    )
}

export default StatusOption;