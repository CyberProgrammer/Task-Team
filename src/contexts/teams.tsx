import React, {createContext, useContext, ReactNode, useState, useEffect} from "react";
import {TeamInterface} from "../interfaces";
import {teamsList} from "../data/live/constants.ts";
import {demoTeams} from "../data/demo/constants.ts";

import {useAuth0} from "@auth0/auth0-react";

interface TeamContextProps {
    teams: TeamInterface[];
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

export const TeamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {isAuthenticated, isLoading} = useAuth0();
    const [teams, setTeams] = useState<TeamInterface[]>([]);
    const [dataInitialized, setDataInitialized] = useState<boolean>(false);
    useEffect(() => {
        if(!isLoading && !dataInitialized){
            const data = isAuthenticated ? teamsList : demoTeams;
            setTeams(data);
            setDataInitialized(true);
        }
    }, [isAuthenticated, isLoading, dataInitialized]);
    return (
        <TeamContext.Provider value={{ teams }}>
            {children}
        </TeamContext.Provider>
    );
}

export const useTeams = (): TeamContextProps => {
    const context = useContext(TeamContext);
    if (context === undefined) {
        throw new Error('useTeams must be used within a UserProvider');
    }
    return context;
};