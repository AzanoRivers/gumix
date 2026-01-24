import { useContext } from 'react';
import { GumixContextType } from '@/types/GumixContext';
import { GumixContext } from '@/context/GumixContext';
// Custom hook to swap themes
export function useSwapTheme() {
    const { theme, setTheme } = useContext<GumixContextType>(GumixContext);
    const swapTheme = (userSelection: 'light' | 'dark') => {
        document.startViewTransition(() => {
            setTheme(userSelection);
            if (userSelection === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
    };
    return { swapTheme, currentTheme: theme };
}