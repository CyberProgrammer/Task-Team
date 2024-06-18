import React from "react";
import {UserProvider, useUser} from "../../../../../contexts/user.tsx";
import TasksTable from "../../../../../components/table/tasks-table.tsx";
import {useArchivedTasks} from "../../../../../contexts/archived_tasks.tsx";
import {UsersListProvider} from "../../../../../contexts/users.tsx";
import TableControls from "./TableControls/table-controls.tsx";

interface ContentProps{
}
const Content : React.FC<ContentProps> = ({}) => {
    const {currentUser} = useUser();
    const {archivedTasks} = useArchivedTasks();
    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-history"}>
                <UserProvider>
                    <UsersListProvider>
                        <TableControls />
                        <TasksTable type={"archived"} currentTasks={archivedTasks}/>
                    </UsersListProvider>
                </UserProvider>
            </div>
        </div>
    )
}

export default Content;