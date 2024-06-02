// UserContext.tsx
import React, {createContext, useContext, ReactNode, useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { EmployeeInterface } from '../interfaces';

interface UserContextProps {
    currentUser: EmployeeInterface;
}

const  userTemplate: EmployeeInterface = {
    id: "ABC",
    first_name: "John",
    last_name: "Doe",
    isAdmin: false,
    settings: {
        isDarkMode: true,
    },
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<EmployeeInterface>(userTemplate);
    const { isAuthenticated, user,  } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && user) {
            // User means nothing right now, modify when I implement backend
            // @ts-ignore
            const { name, email} = user;

            setCurrentUser({
                id: "AB45230GDFG",
                first_name: "Tyler",
                last_name: "Doe",
                isAdmin: false,
                settings: {
                    isDarkMode: true,
                },
            });
        }
    }, [isAuthenticated, user]);

    return (
        <UserContext.Provider value={{ currentUser: currentUser }}>
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
