import {TasksInterface} from "./tasks.ts";

export interface ArchivedTasksInterface extends TasksInterface {
    archived_on: string
}