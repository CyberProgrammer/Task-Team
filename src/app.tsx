import React, {useState} from 'react'
import Navigation from "./components/navigation/navigation.tsx"

import "./app.css"
import {Routes, Route} from "react-router-dom"
import Admin from "./views/manager/manager.tsx";
import Employee from "./views/employee/employee.tsx"
import Index from "./views/index"


const App : React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const handleLogin = () => {
        // Determine the account type
        setIsAdmin(false)
        // Simulate login process
        setIsLoggedIn(true)
    }

    const handleLogout = () =>{
        setIsLoggedIn(false)
    }

    return(
        <div id={"index"}>
            <Navigation onLogin={handleLogin} onLogout={handleLogout} isLoggedIn={isLoggedIn}/>
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    {isLoggedIn ? (isAdmin ? <Route path="/home" element={<Admin/>} /> : <Route path="/home" element={<Employee/>}/>)
                        :
                        (<Route path="/home" element={<Index/>}/>)
                    }
                </Routes>
            </div>
        </div>
    )
}

export default App;