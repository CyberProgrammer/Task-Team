import { useState } from "react";

const useMenuHandlers = () => {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [sortMenuOpen, setSortMenuOpen] = useState(false);
    const [addTaskMenuOpen, setAddTaskMenuOpen] = useState(false);

    const toggleMenu = (menuType: string) => {
        setFilterMenuOpen(menuType === 'filter' ? !filterMenuOpen : false);
        setSortMenuOpen(menuType === 'sort' ? !sortMenuOpen : false);
        setAddTaskMenuOpen(menuType === 'addTask' ? !addTaskMenuOpen : false);
    };

    return {
        filterMenuOpen,
        sortMenuOpen,
        addTaskMenuOpen,
        toggleMenu,
    };
};

export default useMenuHandlers;
