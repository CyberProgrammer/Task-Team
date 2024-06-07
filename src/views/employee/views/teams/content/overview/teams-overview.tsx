import React from "react";

import './teams-overview.css'
import Analytics from "../../analytics/analytics.tsx";
import TeamsTable from "../team_details/table/team_table/team-table.tsx";
import {TeamMemberInterface} from "../../../../../../interfaces";

interface TeamsOverviewProps {
    currentUserTeams: TeamMemberInterface[]
}
const TeamsOverview : React.FC<TeamsOverviewProps> = (
    {
        currentUserTeams,
    }) => {

    return(
        <div className="teams-overview">
            <Analytics />
            <TeamsTable currentUserTeams={currentUserTeams}/>
        </div>
    )
}

export default TeamsOverview;
