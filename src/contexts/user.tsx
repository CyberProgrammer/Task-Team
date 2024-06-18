// UserContext.tsx
import React, {createContext, useContext, ReactNode, useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { EmployeeInterface } from '../interfaces';
import {usersList} from "../data/live/constants.ts"
import {demoUsers} from "../data/demo/constants.ts"

interface UserContextProps {
    currentUser: EmployeeInterface;
    setCurrentUser: (user: EmployeeInterface) => void;
}

const  userTemplate: EmployeeInterface = {
    id: "auth0|665cf1aa4c131177be6692de",
    first_name: "Chandler",
    last_name: "Demo",
    isAdmin: false,
    settings: {
        isDarkMode: true
    }
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<EmployeeInterface>(userTemplate);
    const { isAuthenticated, isLoading, user,  } = useAuth0();
    const [dataInitilized, setDataInitialized] = useState<boolean>(false);

    const updateCurrentUser = (updatedUser: EmployeeInterface) => {
        setCurrentUser({...updatedUser});
    }
    useEffect(() => {
        if (!isLoading && !dataInitilized) {
            if(isAuthenticated){
                setCurrentUser(usersList.find((User) => User.id === user!.sub)!);
                setDataInitialized(true);
            } else{
                setCurrentUser(demoUsers.find((user) => user.id === userTemplate.id)!);
                setDataInitialized(true);
            }

        }
    }, [isAuthenticated, isLoading, user]);



    return (
        <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser: updateCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
