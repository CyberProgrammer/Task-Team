import React, {useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom';

import "./app.css"

import Admin from "./views/manager/manager.tsx";
import Employee from "./views/employee/employee.tsx"
import Index from "./views/index"

const App : React.FC = () => {
    const {isAuthenticated, error} = useAuth0()
    const [isAdmin, setIsAdmin] = useState(false)

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