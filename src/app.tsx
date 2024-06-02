import React, {useState, createContext, useContext} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route} from 'react-router-dom';

import { usersList, tasksList } from './data/constants.ts';
import {EmployeeListInterface, TasksInterface} from './interfaces';
import {useUser} from "./contexts/user_context.tsx";

import "./app.css"

import ManagerView from "./views/manager/manager-view.tsx";
import Index from "./views/index"
import EmployeeTasks from "./views/employee/views/tasks/employee-tasks.tsx";
import EmployeeTeams from "./views/employee/views/teams/employee-teams.tsx";
import EmployeeHistory from "./views/employee/views/history/employee-history.tsx";
import EmployeeProgress from "./views/employee/views/progress/employee-progress.tsx";
import Settings from "./views/employee/views/settings/settings.tsx";
import EmployeeDashboard from "./views/employee/views/dashboard/employee-dashboard.tsx";
const App : React.FC = () => {
    const {currentUser} = useUser();

    const {isAuthenticated, error} = useAuth0()
    const [isAdmin] = useState(currentUser.isAdmin)

    const [currentUsers, setCurrentUsers] = useState<EmployeeListInterface[]>(usersList)
    const [currentTasks, setCurrentTasks] = useState<TasksInterface[]>(tasksList);

    // Handle authentication errors
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return(
        <div id={"index"}>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    {isAuthenticated ? (
                        isAdmin ? (
                            <Route path="/home" element={<ManagerView currentUser={currentUser}/>}/>
                        ) : (
                            <>
                                <Route path="/home" element={<EmployeeDashboard/>}/>
                                <Route path="/employee/tasks" element={<EmployeeTasks currentUsers={currentUsers} currentTasks={currentTasks}/>}/>
                                <Route path="/employee/teams" element={<EmployeeTeams currentUser={currentUser}/>}/>
                                <Route path="/employee/progress" element={<EmployeeProgress currentUser={currentUser}/>}/>
                                <Route path="/employee/history" element={<EmployeeHistory currentUser={currentUser}/>}/>
                                <Route path="/employee/settings" element={<Settings/>}/>
                            </>
                        )
                    ) : null}
                </Routes>
            </div>
        </div>
    )
}

export default App;