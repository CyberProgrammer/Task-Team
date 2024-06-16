import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {TasksInterface} from "../interfaces";
import {tasksList} from "../data/live/constants.ts";
import {demoTasks} from "../data/demo/constants.ts";
import {useAuth0} from "@auth0/auth0-react";

interface TaskContextProps{
    currentTasks: TasksInterface[];
    updateTasks: (newTasks: TasksInterface[]) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const {isAuthenticated, isLoading} = useAuth0();

    const [currentTasks, setCurrentTasks] = useState<TasksInterface[]>([]);
    const [dataInitialized, setDataInitialized] = useState<boolean>(false);

    const updateTasks = (newTasks: TasksInterface[]) => {
        setCurrentTasks(newTasks);
    };

    useEffect(() => {
        if(!isLoading && !dataInitialized){
            const data = isAuthenticated ? tasksList : demoTasks;
            setCurrentTasks(data);
            setDataInitialized(true);
        }
    }, [isAuthenticated, isLoading, dataInitialized]);

    return (
        <TaskContext.Provider value={{currentTasks, updateTasks}}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = (): TaskContextProps => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a UserProvider');
    }
    return context;
};
