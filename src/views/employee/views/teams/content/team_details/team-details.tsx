import React from 'react'
import {TeamInterface, TeamMemberInterface} from "../../../../../../interfaces";
import Analytics from "../../analytics/analytics.tsx";
import TeamTable from "./table/team-table.tsx";

interface TeamDetailProps {
    TeamData: TeamInterface,
    TeamMembers: TeamMemberInterface[],
}
const TeamDetails : React.FC<TeamDetailProps> = (
    {
        TeamData,
        TeamMembers,
    }) => {

    return(
        <div className="teams-details">
            <Analytics />
            <TeamTable TeamData={TeamData} TeamMembers={TeamMembers} />
        </div>
    )
}

export default TeamDetails;