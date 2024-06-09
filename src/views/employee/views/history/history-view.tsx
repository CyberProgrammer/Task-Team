import React from "react";
import Navigation from "../../navigation/navigation.tsx";
import Content from "./content/content.tsx"
import {ArchivedTasksProvider} from "../../../../contexts/archived_tasks.tsx";
interface EmployeeHistoryProps{

}
const HistoryView : React.FC<EmployeeHistoryProps> = ({}) => {

    return (
        <div id={"employee-container"}>
            <Navigation />
            <ArchivedTasksProvider>
                <Content />
            </ArchivedTasksProvider>
        </div>
    )
}

export default HistoryView;