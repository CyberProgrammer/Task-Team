import React from 'react'
import {useUser} from "../../../../../contexts/user.tsx";

interface AnalyticsCardProps{
    title: string,
    data: string,
}
const AnalyticsCard : React.FC<AnalyticsCardProps> = (
    {
        title,
        data
    }) => {
    const {currentUser} = useUser();

    return(
        <div className={`analytics-card`}>
            <div
                className={`analytics-card-container ${currentUser.settings.isDarkMode ? "analytics-card-dark" : "analytics-card-light"}`}>
                <div className={"analytics-card-title"}>
                    <h3>{title}</h3>
                </div>
                <div className={"analytics-card-data"}>
                    <h2>{data}</h2>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsCard;