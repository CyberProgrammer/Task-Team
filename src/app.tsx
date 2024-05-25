import React, {useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import "./app.css"

import Navigation from "./components/navigation/navigation.tsx"
import Admin from "./views/manager/manager.tsx";
import Employee from "./views/employee/employee.tsx"
import Index from "./views/index"
import Home from "./views/home/home.tsx";

const App : React.FC = () => {
    const {isAuthenticated, error, loginWithRedirect} = useAuth0()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            // Simulate role check. Replace with actual role check logic.
            const userRole : string = "employee";
            if(userRole == "admin")
                setIsAdmin(true);

            // Redirect to home if authenticated
            if (window.location.pathname === '/') {
                navigate('/home');
            }
        }
    }, [isAuthenticated, navigate]);

    // Handle authentication errors
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return(
        <div id={"index"}>
            <Navigation />
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={<Index />} />
                    { isAuthenticated ?
                        (isAdmin ? <Route path="/home" element={<Admin/>}/> : <Route path="/home" element={<Employee/>}/>)
                        :
                        null
                    }
                </Routes>
            </div>
        </div>
    )
}

export default App;