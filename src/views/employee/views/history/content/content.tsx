import React from "react";
import {useUser} from "../../../../../contexts/user_context.tsx";

interface ContentProps{
}
const Content : React.FC<ContentProps> = ({}) => {

    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-history"}>
                <h1>Employee history</h1>
            </div>
        </div>
    )
}

export default Content;