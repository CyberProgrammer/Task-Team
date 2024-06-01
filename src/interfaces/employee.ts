export interface EmployeeInterface {
    id: number;
    fullName: string;
    isAdmin: boolean;
    settings: SettingsInterface
}

export interface EmployeeListInterface {
    id: number,
    fullName: string,
    isAdmin: boolean
}

interface SettingsInterface {
    isDarkMode: boolean;
}