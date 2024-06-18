import React, {ChangeEvent, useState} from "react";
import SearchBar from "../../../../../components/inputs/search-bar.tsx";
import NotificationUnreadIconDark from "../../../../../../assets/icons/dark_mode/notification_unread.svg";
import NotificationReadIconDark from "../../../../../../assets/icons/dark_mode/notification_read.svg";
import NotificationUnreadIconLight from "../../../../../../assets/icons/light_mode/notification_unread.svg";
import NotificationReadIconLight from "../../../../../../assets/icons/light_mode/notification_read.svg";
import AnalyticsWrapper from "../analytics/analytics-wrapper.tsx";
import UpcomingDeadline from "../upcoming_deadlines/upcoming-deadlines.tsx";
import {useUser} from "../../../../../contexts/user.tsx";
import {TaskProvider} from "../../../../../contexts/tasks.tsx";
interface ContentProps{

}
const Content : React.FC<ContentProps> = ({}) => {
    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;
    const isUnreadNotification = true;

    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div id={"employee-content"} className={isDarkMode ? "content-dark" : "content-light"}>
            <div id={"employee-dashboard"}>
                <div className={`toolbar ${isDarkMode ? "toolbar-dark" : "toolbar-light"}`}>
                    <div className={"toolbar-left"}>
                        <h2>Welcome, {currentUser.first_name}</h2>
                    </div>
                    <div className={"toolbar-right"}>
                        <SearchBar className={"search-bar"} value={searchValue} onChange={handleSearchChange}/>
                        <img className={"icon"}
                             src={isDarkMode ?
                                 isUnreadNotification ? NotificationUnreadIconDark : NotificationReadIconDark
                                 :
                                 isUnreadNotification ? NotificationUnreadIconLight : NotificationReadIconLight
                             }
                             alt={"Notification"}
                             onClick={() => console.log("Clicked notifications button...")}
                        />
                    </div>
                </div>
                <div className={"container"}>
                    <TaskProvider>
                        <AnalyticsWrapper />
                        <UpcomingDeadline />
                    </TaskProvider>
                </div>
            </div>
        </div>
    )
}

export default Content;