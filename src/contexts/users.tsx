import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {EmployeeListInterface} from "../interfaces";
import {usersList} from "../data/live/constants.ts";
import {demoUsers} from "../data/demo/constants.ts";

import {useAuth0} from "@auth0/auth0-react";

interface UsersListContextProps{
    currentUsers: EmployeeListInterface[];
    updateUsers: (user: EmployeeListInterface) => void;
}

const UsersListContext = createContext<UsersListContextProps | undefined>(undefined);

export const UsersListProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();
    const [currentUsers, setCurrentUsers] = useState<EmployeeListInterface[]>([]);
    const [dataInitialized, setDataInitialized] = useState<boolean>(false);

    // Append new user function
    const updateUsers = (newUser: EmployeeListInterface) => {
        setCurrentUsers((prevState) => [...prevState, newUser]);
    }
    useEffect(() => {
        if (!isLoading && !dataInitialized) {
            const data = isAuthenticated ? usersList : demoUsers;
            setCurrentUsers(data);
            setDataInitialized(true);
        }
    }, [isAuthenticated, isLoading, dataInitialized]);

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
