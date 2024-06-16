import {ArchivedTasksInterface, EmployeeListInterface, TasksInterface} from "../interfaces";
import {usersList} from "../data/live/constants.ts";
import {demoUsers} from "../data/demo/constants.ts";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";

export function getFullName (task: TasksInterface | ArchivedTasksInterface) {
    const {isAuthenticated, isLoading} = useAuth0();
    const [data, setData] = useState<EmployeeListInterface[]>([])
    const [dataInitialized, setDataInitialized] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoading && !dataInitialized){
            setData(isAuthenticated ? usersList : demoUsers);
            setDataInitialized(true);
        }
    }, [isAuthenticated, isLoading]);

    if(data){
        const foundAssignee = data.find(user => user.id === task.assignee);

        if (!foundAssignee) {
            console.log("No Assignee found.");
            return 'Unknown';
        }

        return `${foundAssignee.first_name} ${foundAssignee.last_name}`;
    }
}