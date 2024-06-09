import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route} from 'react-router-dom';

import "./app.css"

import Index from "./views/index"
import TasksView from "./views/employee/views/tasks/tasks-view.tsx";
import TeamsView from "./views/employee/views/teams/teams-view.tsx";
import HistoryView from "./views/employee/views/history/history-view.tsx";
import Settings from "./views/employee/views/settings/settings.tsx";
import DashboardView from "./views/employee/views/dashboard/dashboard-view.tsx";
const App : React.FC = () => {
    const {isAuthenticated, error} = useAuth0()

    // Handle authentication errors
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return(
        <div id={"index"}>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    {isAuthenticated ?
                        (<>
                            <Route path="/home" element={<DashboardView />}/>
                            <Route path="/tasks" element={<TasksView />}/>
                            <Route path="/teams" element={<TeamsView />}/>
                            <Route path="/history" element={<HistoryView />}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </>) : null}
                </Routes>
            </div>
        </div>
    )
}

export default App;