import React, {createContext, ReactNode, useContext, useState} from 'react'
import {ArchivedTasksInterface} from "../interfaces"
import {archivedTasksList} from "../data/constants.ts";

interface ArchivedTasksProps {
    archivedTasks: ArchivedTasksInterface[]
}

const ArchivedTasksContext = createContext<ArchivedTasksProps | undefined>(undefined)

export const ArchivedTasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [archivedTasks, setArchivedTasks] = useState<ArchivedTasksInterface[]>(archivedTasksList)

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