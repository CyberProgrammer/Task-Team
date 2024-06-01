import React from "react";

interface SearchBarProps {
    className?: string;
    onChange?: () => void;
}
const SearchBar : React.FC<SearchBarProps> = (
    {
        className,
        onChange
    }) => {

    return (
        <input className={className} type={"text"} placeholder={"Search..."} onChange={onChange}/>
    )
}

export default SearchBar;