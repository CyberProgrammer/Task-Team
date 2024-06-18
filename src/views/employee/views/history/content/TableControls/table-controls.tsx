import SearchBar from "../../../../../../components/inputs/search-bar.tsx";
import TableControlButton from "../../../../../../components/buttons/TableControlButton.tsx";
import FilterIconDark from "../../../../../../../assets/icons/dark_mode/filter.svg";
import FilterIconLight from "../../../../../../../assets/icons/light_mode/filter.svg";
import SortIconDark from "../../../../../../../assets/icons/dark_mode/sort.svg";
import SortIconLight from "../../../../../../../assets/icons/light_mode/sort.svg";
import React from "react";
import {useUser} from "../../../../../../contexts/user.tsx";

import './table-controls.css'

const TableControls = () => {
    const {currentUser} = useUser();
    const isDarkMode = currentUser.settings.isDarkMode;

    return (
        <div className={"table-controls"}>
            <div className={"table-col left"}>
                <SearchBar className={"tasks-table-search"}/>
            </div>
            <div className={"table-col right"}>
                <TableControlButton clickEvent={() => null} isDarkMode={isDarkMode} iconDark={FilterIconDark}
                                    iconLight={FilterIconLight} text={"Filter"}/>
                <TableControlButton clickEvent={() => null} isDarkMode={isDarkMode} iconDark={SortIconDark}
                                    iconLight={SortIconLight} text={"Sort"}/>
            </div>
        </div>
    )
}

export default TableControls;