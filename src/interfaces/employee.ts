export interface EmployeeInterface {
    id: number;
    fullName: string;
    isAdmin: boolean;
    settings: SettingsInterface
}

interface SettingsInterface {
    isDarkMode: boolean;
}