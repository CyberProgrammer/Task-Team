import React, {createContext, ReactNode, useContext, useState} from 'react'
import {TasksInterface} from "../interfaces";
import {tasksList} from "../data/constants.ts";

interface TaskContextProps{
    currentTasks: TasksInterface[];
    updateTasks: (newTasks: TasksInterface[]) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTasks, setCurrentTasks] = useState<TasksInterface[]>(tasksList);

    const updateTasks = (newTasks: TasksInterface[]) => {
        setCurrentTasks(newTasks);
    };

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
