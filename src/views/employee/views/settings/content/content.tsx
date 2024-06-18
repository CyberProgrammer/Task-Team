import React from "react";
import {useUser} from "../../../../../contexts/user.tsx";

const Content : React.FC = () => {
    const {currentUser, setCurrentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    // Just to test for now until i get db setup
    const handleThemeMode = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        console.log("Current: ", currentUser);

        const updatedUser = {
            ...currentUser,
            settings: {
                ...currentUser.settings,
                isDarkMode: !currentUser.settings.isDarkMode,
            }
        };

        console.log("Updated user: ", updatedUser);
        setCurrentUser(updatedUser);
    }

    return(
        <div id={"settings-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div className={"settings-body"}>
                <h1>Settings</h1>
                <h3>Theme</h3>
                <select className={"theme-select"}
                        value={isDarkMode ? "dark" : "light"}
                        onChange={handleThemeMode}>
                    <option value="dark">Dark mode</option>
                    <option value="light">Light mode</option>
                </select>
            </div>
        </div>
    )
}

export default Content;