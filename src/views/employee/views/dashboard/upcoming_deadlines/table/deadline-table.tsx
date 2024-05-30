import React from "react";
import {EmployeeInterface} from "../../../../../../interfaces";
import DeadlineTableRow from "./rows/deadline-table-row.tsx";

interface DeadlineTableProps {
    currentUser: EmployeeInterface
}
const DeadlineTable : React.FC<DeadlineTableProps> = (
    {
        currentUser
    }) => {

    const isDarkMode = currentUser.settings.isDarkMode

    return (
        <div id={"deadline-table"} className={isDarkMode ? "deadline-table-dark" : "deadline-table-light"}>
            <div className={"deadline-table-head"}>
                <ul>
                    <li className={"col-1"}>
                        <h4>Task name</h4>
                    </li>
                    <li className={"col-2"}>
                        <h4>Assignee</h4>
                    </li>
                    <li className={"col-3"}>
                        <h4>Due date</h4>
                    </li>
                    <li className={"col-4"}>
                        <h4>Status</h4>
                    </li>
                    <li className={"col-5"}>
                        <h4>Priority</h4>
                    </li>
                </ul>
            </div>
            <div className={"deadline-table-rows"}>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Netus massa luctus pulvinar."} taskAssignee={"Abdullah Wei"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Nostra litora parturient accumsan elementum bibendum sociosqu."} taskAssignee={"Brian Raj"} taskDueDate={"16th Oct"} taskStatus={"progress"} taskPriority={"med"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Curabitur facilisi nascetur ornare."} taskAssignee={"Bibi Jean"} taskDueDate={"16th Oct"} taskStatus={"not-started"} taskPriority={"high"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Sit sapien imperdiet feugiat feugiat nulla sapien."} taskAssignee={"Bernard Traore"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Nisl habitant sem et erat aptent."} taskAssignee={"Denis Ramirez"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Habitasse eget per felis varius ultricies."} taskAssignee={"Vladimir Mai"} taskDueDate={"16th Oct"} taskStatus={"progress"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Sit sapien imperdiet feugiat feugiat nulla sapien."} taskAssignee={"Bernard Traore"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Nisl habitant sem et erat aptent."} taskAssignee={"Denis Ramirez"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Habitasse eget per felis varius ultricies."} taskAssignee={"Vladimir Mai"} taskDueDate={"16th Oct"} taskStatus={"progress"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Netus massa luctus pulvinar."} taskAssignee={"Abdullah Wei"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Nostra litora parturient accumsan elementum bibendum sociosqu."} taskAssignee={"Brian Raj"} taskDueDate={"16th Oct"} taskStatus={"progress"} taskPriority={"med"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Curabitur facilisi nascetur ornare."} taskAssignee={"Bibi Jean"} taskDueDate={"16th Oct"} taskStatus={"not-started"} taskPriority={"high"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Sit sapien imperdiet feugiat feugiat nulla sapien."} taskAssignee={"Bernard Traore"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Nisl habitant sem et erat aptent."} taskAssignee={"Denis Ramirez"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Habitasse eget per felis varius ultricies."} taskAssignee={"Vladimir Mai"} taskDueDate={"16th Oct"} taskStatus={"progress"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Sit sapien imperdiet feugiat feugiat nulla sapien."} taskAssignee={"Bernard Traore"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Nisl habitant sem et erat aptent."} taskAssignee={"Denis Ramirez"} taskDueDate={"16th Oct"} taskStatus={"done"} taskPriority={"low"}/>
                <DeadlineTableRow currentUser={currentUser} taskTitle={"Habitasse eget per felis varius ultricies."} taskAssignee={"Vladimir Mai"} taskDueDate={"16th Oct"} taskStatus={"progress"} taskPriority={"low"}/>
            </div>
        </div>
    )
}

export default DeadlineTable;