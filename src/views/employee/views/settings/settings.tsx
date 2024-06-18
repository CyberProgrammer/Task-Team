import React from "react";
import Navigation from "../../navigation/navigation.tsx";
import Content from "./content/content.tsx";
import {UserProvider} from "../../../../contexts/user.tsx";

import './settings.css';

const Settings : React.FC = () => {

    return (
        <div id={"employee-container"}>
            <UserProvider>
                <Navigation />
                <Content />
            </UserProvider>
        </div>
    )
}

export default Settings;