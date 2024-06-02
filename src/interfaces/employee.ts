export interface EmployeeInterface {
    id: string;
    first_name: string;
    last_name: string;
    isAdmin: boolean;
    settings: SettingsInterface
}

export interface EmployeeListInterface {
    id: string,
    first_name: string;
    last_name: string;
    isAdmin: boolean;
}

interface SettingsInterface {
    isDarkMode: boolean;
}