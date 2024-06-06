import React from "react";
import {useUser} from "../../../../../contexts/user_context.tsx";
import TeamsOverview from "./overview/teams-overview.tsx";
import TeamDetails from "./team_details/team-details.tsx";
import {useTeams} from "../../../../../contexts/team.tsx";
import {useTeamMembers} from "../../../../../contexts/team-members.tsx";

interface ContentProps{

}
const Content : React.FC<ContentProps> = ({}) => {
    /* Test data */
    const {teams} = useTeams();
    const {teamMembers} = useTeamMembers();

    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    const [teamView, setTeamView] = React.useState<string>("overview");

    const handleSelectViewChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setTeamView(event.target.value);
    }

    return(
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-teams"}>
                <div className="teams-header">
                    <div className="teams-header-left">
                        <select name="team-select" id="team-select" className={isDarkMode ? "team-select-dark" : "team-select-light"} onChange={handleSelectViewChange}>
                            <option value={"overview"}>Overview</option>
                            { teams.map((entry) => (
                                <option value={`team${entry.id}`}>{entry.team_name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div id={"teams-container"}>
                    { teamView === "overview" ?
                        <TeamsOverview />
                        :
                        <TeamDetails TeamData={teams.find((entry) => teamView == `team${entry.id}`)!} TeamMembers={teamMembers.filter((entry) => teamView == `team${entry.team_id}`)}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;
