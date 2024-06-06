import React, {createContext, useContext, ReactNode, useState, useEffect} from "react";
import {TeamMemberInterface} from "../interfaces";
import {teamMembersList} from "../data/constants.ts"

interface TeamMembersProps {
    teamMembers: TeamMemberInterface[];
}

const TeamMembersContext = createContext<TeamMembersProps | undefined>(undefined);

export const TeamMembersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [teamMembers, setTeamMembers] = useState<TeamMemberInterface[]>(teamMembersList);

    return (
        <TeamMembersContext.Provider value={{ teamMembers }}>
            {children}
        </TeamMembersContext.Provider>
    );
}
export const useTeamMembers = (): TeamMembersProps => {
    const context = useContext(TeamMembersContext);
    if (context === undefined) {
        throw new Error('useTeams must be used within a UserProvider');
    }
    return context;
};