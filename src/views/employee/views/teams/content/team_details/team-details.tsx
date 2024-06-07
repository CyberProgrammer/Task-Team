import React from 'react'
import Analytics from "../../analytics/analytics.tsx";
import TeamMembersTable from "./table/team-members-table.tsx";
import './team-details.css'

interface TeamDetailProps {
    teamID: number
}
const TeamDetails : React.FC<TeamDetailProps> = (
    {
        teamID
    }) => {

    return(
        <div className="teams-details">
            <Analytics />
            <TeamMembersTable teamID={teamID} />
        </div>
    )
}

export default TeamDetails;