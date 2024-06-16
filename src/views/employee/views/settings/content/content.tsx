import React from "react";
import {useUser} from "../../../../../contexts/user_context.tsx";

const Content : React.FC = () => {
    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    return(
        <div id={"settings-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <h1>Settings</h1>
        </div>
    )
}

export default Content;