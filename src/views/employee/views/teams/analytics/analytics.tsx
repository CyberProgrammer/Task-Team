import React from "react";
import './analytics.css'
import {useUser} from "../../../../../contexts/user.tsx";
import AnalyticsCard from "./analytics-card.tsx";
import {useTeamMembers} from "../../../../../contexts/team_members.tsx";

const Analytics : React.FC = () => {
    const {currentUser} = useUser();
    const {teamMembers} = useTeamMembers();

    const currentTeams = [...teamMembers];

    return (
        <div className={`teams-overview-analytics ${currentUser.settings.isDarkMode ? "teams-analytics-dark" : "teams-analytics-light"}`}>
            <div className={`teams-analytics-container`}>
                <AnalyticsCard title={"Number of teams"} data={`${currentTeams.filter((member) => member.user_id === currentUser.id).length}`}/>
                <AnalyticsCard title={"Active tasks"} data={"5"}/>
                <AnalyticsCard title={"Completed tasks"} data={"5"}/>
                <AnalyticsCard title={"Number of Teams"} data={"5"}/>
            </div>
        </div>
    )
}

export default Analytics;
