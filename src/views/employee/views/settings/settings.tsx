import React from "react";
import Navigation from "../../navigation/navigation.tsx";
import Content from "./content/content.tsx";
import {UserProvider} from "../../../../contexts/user_context.tsx";

const Settings : React.FC = () => {

    return (
        <div id={"employee-container"}>
            <Navigation />
            <UserProvider>
                <Content />
            </UserProvider>
        </div>
    )
}

export default Settings;