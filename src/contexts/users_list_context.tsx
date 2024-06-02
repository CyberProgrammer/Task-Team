import React, {createContext, ReactNode, useContext, useState} from 'react'
import {EmployeeListInterface} from "../interfaces";
import {usersList} from "../data/constants.ts";

interface UsersListContextProps{
    currentUsers: EmployeeListInterface[];
    updateUsers: (user: EmployeeListInterface) => void;
}

const UsersListContext = createContext<UsersListContextProps | undefined>(undefined);

export const UsersListProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUsers, setCurrentUsers] = useState<EmployeeListInterface[]>(usersList)

    // Append new user function
    const updateUsers = (newUser: EmployeeListInterface) => {
        setCurrentUsers((prevState) => [...prevState, newUser]);
    }

    return(
        <UsersListContext.Provider value={{currentUsers, updateUsers}}>
            {children}
        </UsersListContext.Provider>
    )
}

export const useUsersList = (): UsersListContextProps => {
    const context = useContext(UsersListContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a UserProvider');
    }
    return context;
}
