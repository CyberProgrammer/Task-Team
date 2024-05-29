import React, {useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom';

import {EmployeeInterface} from './interfaces';
import "./app.css"

import ManagerView from "./views/manager/manager-view.tsx";
import EmployeeView from "./views/employee/employee-view.tsx"
import Index from "./views/index"

// Test sample of the data fetched for current user
const currentUser: EmployeeInterface = {
    id: 1,
    fullName: "John Doe",
    isAdmin: false,
    settings: {
        isDarkMode: false
    }
};

const App : React.FC = () => {
    const {isAuthenticated, error} = useAuth0()
    const [isAdmin] = useState(currentUser.isAdmin)

    // Handle authentication errors
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return(
        <div id={"index"}>
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={<Index />} />
                    { isAuthenticated ?
                        (isAdmin ?
                            <Route path="/home" element={
                                <ManagerView
                                    currentUser={currentUser}
                                />
                            }/>
                            :
                            <Route path="/home" element={
                                <EmployeeView
                                    currentUser={currentUser}
                                />
                            }/>)
                        :
                        null
                    }
                </Routes>
            </div>
        </div>
    )
}

export default App;