import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {ArchivedTasksInterface} from "../interfaces"
import {archivedTasksList} from "../data/live/constants.ts";
import {demoArchivedTasks} from "../data/demo/constants.ts";

import {useAuth0} from "@auth0/auth0-react";

interface ArchivedTasksProps {
    archivedTasks: ArchivedTasksInterface[]
}

const ArchivedTasksContext = createContext<ArchivedTasksProps | undefined>(undefined)

export const ArchivedTasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {isAuthenticated, isLoading} = useAuth0();

    const [archivedTasks, setArchivedTasks] = useState<ArchivedTasksInterface[]>([])
    const [dataInitialized, setDataInitialized] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoading && !dataInitialized){
            const data = isAuthenticated ? archivedTasksList : demoArchivedTasks;
            setArchivedTasks(data);
            setDataInitialized(true);
        }

    }, [isAuthenticated, isLoading, dataInitialized]);
    return(
        <ArchivedTasksContext.Provider value={{ archivedTasks }}>
            {children}
        </ArchivedTasksContext.Provider>
    )
}

export const useArchivedTasks = (): ArchivedTasksProps => {
    const context = useContext(ArchivedTasksContext);
    if (context === undefined) {
        throw new Error('Archived tasks context must be used within a UserProvider');
    }
    return context;
};