interface GumixContextType {
    theme: string;
    userData: Object;
    setTheme: (theme: string) => void;
    setUserData: (data: Object) => void;
}

export type { GumixContextType };