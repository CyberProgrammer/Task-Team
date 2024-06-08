import React from "react";
import {useUser} from "../../../../../../../../contexts/user_context.tsx";
import './team-table.css'
import {useTeams} from "../../../../../../../../contexts/team.tsx";
import {useTeamMembers} from "../../../../../../../../contexts/team-members.tsx";

interface TeamTableProps {

}
const TeamsTable : React.FC<TeamTableProps> = ({}) => {

    const {currentUser} = useUser();
    const {teams} = useTeams();
    const {teamMembers} = useTeamMembers();

    const currentUserTeams = teamMembers.filter((member) => member.user_id === currentUser.id);

    return(
        <div id={"team-table"} className={currentUser.settings.isDarkMode ? "team-table-dark" : "team-table-light"}>
            <div id={"team-table-header"}>
                <ul className={`team-table-header ${currentUser.settings.isDarkMode ? "team-table-header-dark" : "team-table-header-light"}`}>
                    <li>Team Name</li>
                    <li>Number of Members</li>
                    <li>Creator</li>
                    <li>Created On</li>
                </ul>
            </div>
            <div id={"team-table-rows"}>
                { currentUserTeams.map((entry) => {
                    const team = teams.find((team) => team.id === entry.team_id);
                    const members = teamMembers.filter((member) => member.team_id === entry.team_id);
                    const numberOfMembers = members.length;
                    return team ? (
                        <div className={"team-table-row"} key={team.id}>
                            <ul className={"team-table-row-list"}>
                                <li>{team.team_name}</li>
                                <li>{numberOfMembers}</li>
                                <li>{team.creator}</li>
                                <li>{team.created_on}</li>
                            </ul>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    )
}

export default TeamsTable;