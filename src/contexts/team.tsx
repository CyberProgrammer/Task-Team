import React, {createContext, useContext, ReactNode, useState, useEffect} from "react";
import {TeamInterface} from "../interfaces";
import {teamsList} from "../data/constants.ts"

interface TeamContextProps {
    teams: TeamInterface[];
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

export const TeamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [teams, setTeams] = useState<TeamInterface[]>(teamsList);

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