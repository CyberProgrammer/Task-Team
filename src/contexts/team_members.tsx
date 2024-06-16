import React, {createContext, useContext, ReactNode, useState, useEffect} from "react";
import {TeamMemberInterface} from "../interfaces";
import {teamMembersList} from "../data/live/constants.ts";
import {demoTeamMembers} from "../data/demo/constants.ts";
import {useAuth0} from "@auth0/auth0-react";

interface TeamMembersProps {
    teamMembers: TeamMemberInterface[];
}

const TeamMembersContext = createContext<TeamMembersProps | undefined>(undefined);

export const TeamMembersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {isAuthenticated, isLoading} = useAuth0();
    const [teamMembers, setTeamMembers] = useState<TeamMemberInterface[]>([]);
    const [dataInitialized, setDataInitialized] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoading && !dataInitialized){
            const data = isAuthenticated ? teamMembersList : demoTeamMembers
            setTeamMembers(data);
            setDataInitialized(true);
        }
    }, [isAuthenticated, isLoading, dataInitialized]);

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