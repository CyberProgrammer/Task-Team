import React from "react";
import Navigation from "../../navigation/navigation.tsx";

import './teams-view.css'

import Content from "./content/content.tsx"
import {UsersListProvider} from "../../../../contexts/users_list_context.tsx";
import {TeamProvider} from "../../../../contexts/team.tsx";
import {TeamMembersProvider} from "../../../../contexts/team-members.tsx";

interface EmployeeTeamsProps{

}
const TeamsView : React.FC<EmployeeTeamsProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <Navigation />
            <UsersListProvider>
                <TeamProvider>
                    <TeamMembersProvider>
                        <Content />
                    </TeamMembersProvider>
                </TeamProvider>
            </UsersListProvider>
        </div>
    )
}

export default TeamsView;