import React, {useEffect, useState} from "react";
import {useUser} from "../../../../../../../../contexts/user.tsx";
import './team-table.css'
import {useTeams} from "../../../../../../../../contexts/teams.tsx";
import {useTeamMembers} from "../../../../../../../../contexts/team_members.tsx";
import {TeamMemberInterface} from "../../../../../../../../interfaces";
import {getFullName} from "../../../../../../../../utils/getFullName.ts";
import {useUsersList} from "../../../../../../../../contexts/users.tsx";

interface TeamTableProps {

}
const TeamsTable : React.FC<TeamTableProps> = ({}) => {

    const { currentUser } = useUser();
    const { currentUsers} = useUsersList();
    const { teams } = useTeams();
    const { teamMembers } = useTeamMembers();

    const [currentUserTeams, setCurrentUserTeams] = useState<TeamMemberInterface[]>([]);

    useEffect(() => {
        const filteredTeams = teamMembers.filter((member) => member.user_id === currentUser.id);
        setCurrentUserTeams(filteredTeams);
    }, [currentUser.id, teamMembers]);

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
            <div id="team-table-rows">
                {currentUserTeams.map((entry) => {
                    const team = teams.find((team) => team.id === entry.team_id);
                    if (!team) {
                        return null;
                    }
                    const members = teamMembers.filter((member) => member.team_id === entry.team_id);
                    const numberOfMembers = members.length;
                    const user = currentUsers.find((user) => user.id === team.creator); // Using useFullName hook here
                    const creatorName = user?.first_name + " " + user?.last_name;

                    return (
                        <div className="team-table-row" key={team.id}>
                            <ul className="team-table-row-list">
                                <li>{team.team_name}</li>
                                <li>{numberOfMembers}</li>
                                <li>{creatorName}</li>
                                <li>{team.created_on}</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TeamsTable;