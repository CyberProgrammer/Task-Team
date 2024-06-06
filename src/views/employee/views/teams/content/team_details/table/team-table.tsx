import React from 'react'
import {useUser} from "../../../../../../../contexts/user_context.tsx";
import {useTeamMembers} from "../../../../../../../contexts/team-members.tsx";
import {useTeams} from "../../../../../../../contexts/team.tsx";
import {TeamInterface, TeamMemberInterface} from "../../../../../../../interfaces";
import {useUsersList} from "../../../../../../../contexts/users_list_context.tsx";

interface TeamTableProps{
    TeamData: TeamInterface,
    TeamMembers: TeamMemberInterface[],
}
const TeamTable : React.FC<TeamTableProps> = (
    {
        TeamData,
        TeamMembers
    }) => {
    const {currentUser} = useUser();
    const {currentUsers} = useUsersList();
    const {teams} = useTeams();
    const {teamMembers} = useTeamMembers();

    return(
        <div id={"team-details-table"}>
            <h1>{TeamData.team_name}</h1>

            <div id={"team-members-table"}>
                <div id={"team-members-table-header"}>
                    <ul className="team-member-header">
                        <li>Name</li>
                        <li>Joined On</li>
                        <li>Role</li>
                        <li>Tasks completed</li>
                    </ul>
                </div>
                <div className="team-members-row">
                    {teamMembers.map((member) => {
                        const user = currentUsers.find((user) => user.id === member.user_id);
                        return user ? (
                            <ul className="team-member-row">
                                <li key={member.id}>{user.first_name + " " + user.last_name}</li>
                                <li key={member.joined_on}>{new Date(member.joined_on).toLocaleDateString()}</li>
                                <li>Employee</li>
                                <li>25</li>
                            </ul>
                        ) : null
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamTable;