import React from "react";

interface SearchBarProps {
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar : React.FC<SearchBarProps> = (
    {
        className,
        value,
        onChange
    }) => {

    return (
        <input className={className} type={"text"} placeholder={"Search..."} value={value} onChange={onChange}></input>
    )
}

export default SearchBar;