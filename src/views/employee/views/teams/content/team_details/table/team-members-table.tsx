import React from 'react'
import {useUser} from "../../../../../../../contexts/user.tsx";
import {useTeamMembers} from "../../../../../../../contexts/team_members.tsx";
import {useTeams} from "../../../../../../../contexts/teams.tsx";
import {useUsersList} from "../../../../../../../contexts/users.tsx";

interface TeamTableProps{
    teamID: number
}
const TeamMembersTable : React.FC<TeamTableProps> = (
    {
        teamID
    }) => {
    const { currentUser } = useUser();
    const { currentUsers } = useUsersList();
    const { teams } = useTeams();
    const { teamMembers } = useTeamMembers();

    // Find the team by teamID
    const team = teams.find((team) => team.id === teamID);
    console.log("team", team);
    // Filter team members based on the teamID
    const members = teamMembers.filter((member) => member.team_id === teamID);
    console.log("members", members);
    return (
        <div id="team-details-table">
            <div id="team-members-table"
                 className={currentUser.settings.isDarkMode ? "team-members-table-dark" : "team-members-table-light"}>
                <div id="team-members-table-header">
                    <ul className={`team-member-header ${currentUser.settings.isDarkMode ? "team-member-header-dark" : "team-member-header-light"}`}>
                        <li>Name</li>
                        <li>Joined On</li>
                        <li>Role</li>
                        <li>Tasks completed</li>
                    </ul>
                </div>
                <div className="team-members-row">
                    {members.map((member) => {
                        const user = currentUsers.find((user) => user.id === member.user_id);
                        return user ? (
                            <ul className="team-member-row" key={member.id}>
                                <li>{user.first_name + ' ' + user.last_name}</li>
                                <li>{new Date(member.joined_on).toLocaleDateString()}</li>
                                <li>{member.role}</li>
                                <li>{member.completed}</li>
                            </ul>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default TeamMembersTable;