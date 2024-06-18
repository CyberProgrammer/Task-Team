import React from "react";

interface TableControlProps {
    clickEvent: () => void;
    isDarkMode: boolean;
    iconDark: string;
    iconLight: string;
    text: string;
}

const TableControlButton: React.FC<TableControlProps> = ({ clickEvent, isDarkMode, iconDark, iconLight, text }) => (
    <button
        onClick={clickEvent}
        className={`toolbar-button ${isDarkMode ? "toolbar-button-dark" : "toolbar-button-light"}`}
    >
        <img className="toolbar-button-icon" src={isDarkMode ? iconDark : iconLight} alt="Icon" />
        <h4 className="toolbar-button-text">{text}</h4>
    </button>
);

export default TableControlButton;