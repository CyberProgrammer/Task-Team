import React from "react";
import {useUser} from "../../../../../contexts/user_context.tsx";
import TeamsOverview from "./overview/teams-overview.tsx";
import TeamDetails from "./team_details/team-details.tsx";
import {useTeams} from "../../../../../contexts/team.tsx";
import {useTeamMembers} from "../../../../../contexts/team-members.tsx";
const Content : React.FC = ({}) => {
    /* Test data */
    const {teams} = useTeams();
    const {teamMembers} = useTeamMembers();

    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    // Selected team from team-select
    const [selectedTeamID, setTeamID] = React.useState<number>(-1);
    const handleSelectViewChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setTeamID(parseInt(event.currentTarget.value));
        console.log("Select ID: ",parseInt(event.currentTarget.value));
    }

    return(
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-teams"}>
                <div className={`teams-header ${isDarkMode ? "teams-header-dark" : "teams-header-light"}`}>
                    <div className="teams-header-left">
                        <select name="team-select" id="team-select" className={isDarkMode ? "team-select-dark" : "team-select-light"} onChange={handleSelectViewChange}>
                            <option value={-1}>Overview</option>
                            {teams
                                .filter((team) => teamMembers.filter((member) => member.user_id === currentUser.id && team.id == member.team_id))
                                .map(team => (
                                    <option key={team.id} value={team.id}>{team.team_name}</option>
                                ))}
                        </select>
                    </div>
                </div>
                <div id={"teams-container"}>
                    { selectedTeamID === -1 ?
                        <TeamsOverview />
                        :
                        <TeamDetails teamID={selectedTeamID}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;
