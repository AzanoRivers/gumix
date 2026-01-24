import React, { createContext, useState, ReactNode } from 'react';
import { GumixContextType } from '@/types/GumixContext';

// [INTERFACES]
interface GumixProviderProps {
    children: ReactNode;
}
// [CONTEXT]
export const GumixContext = createContext<GumixContextType>({
    theme: '',
    userData: {},
    setTheme: () => {},
    setUserData: () => {},
} as GumixContextType);
// [PROVIDER & HOOK]
export const GumixProvider: React.FC<GumixProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');
    const [userData, setUserData] = useState<Object>({});
    return (
        <GumixContext.Provider value={{ theme, userData, setTheme, setUserData }}>
            {children}
        </GumixContext.Provider>
    );
};