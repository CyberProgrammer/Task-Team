import {ArchivedTasksInterface, TasksInterface} from "../interfaces";
import {usersList} from "../data/constants.ts";
export function getFullName (task: TasksInterface | ArchivedTasksInterface) {
    const foundAssignee = usersList.find(user => user.id === task.assignee);

    if (!foundAssignee) {
        console.log("No Assignee found.");
        return null;
    }

    return `${foundAssignee.first_name} ${foundAssignee.last_name}`;
}