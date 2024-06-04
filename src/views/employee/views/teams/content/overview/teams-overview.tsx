import React from "react";
import {useUser} from "../../../../../../contexts/user_context.tsx";

const TeamsOverview : React.FC = () => {
    const {currentUser} = useUser();

    return(
        <div className="teams-overview">
            {currentUser.isAdmin ?
                <h1>Overview Admin</h1>
                :
                <h1>Overview Employee</h1>
            }

        </div>
    )
}

export default TeamsOverview;
