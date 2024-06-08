import React from "react";

import './teams-overview.css'
import Analytics from "../../analytics/analytics.tsx";
import TeamsTable from "../team_details/table/team_table/team-table.tsx";

interface TeamsOverviewProps {
}
const TeamsOverview : React.FC<TeamsOverviewProps> = ({}) => {

    return(
        <div className="teams-overview">
            <Analytics />
            <TeamsTable />
        </div>
    )
}

export default TeamsOverview;
