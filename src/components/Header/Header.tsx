import { useEffect, useState } from 'react';
import { useSwapTheme } from '@/hooks/useSwapTheme';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LogoGumix } from '@/components';
import { LampDeskIcon, MoonIcon } from 'lucide-react';
enum userTheme {
    light = 'light',
    dark = 'dark',
}
/**
 * Header Component - Header layout for the extension
 * @author AzanoRivers | (Claude Sonnet 4.5)
 * @description Layout, Logic and Effects by AzanoRivers. (AI Assisted) for Shadows & css variables
 */
export function Header() {
    const [, setUserTheme,] = useLocalStorage<string>('userTheme', 'dark');
    const { swapTheme, } = useSwapTheme();
    const [themeState, setThemeState] = useState<userTheme>(userTheme.dark);

    useEffect(() => {
        swapTheme(themeState);
        setUserTheme(themeState);
    }, [themeState]);

    return (
        <header className="w-full h-full flex items-center justify-evenly p-2 gap-2">
            <section className='w-[20%] h-full'>
                <LogoGumix size={55} />
            </section>
            <section className='w-[50%] h-full text-start'>
                <h1 className="font-jersey text-3xl text-gumpix-pink dark:text-gumpix-pink-light text-shadow-pink-bottom dark:text-shadow-pink-light-bottom">
                    Gumix HUD
                </h1>
            </section>
            <section className='w-[30%] flex justify-center items-center gap-3 border-2 border-gumpix-pink dark:border-gumpix-pink-light rounded-lg relative'>
                <div className='cursor-pointer w-2/4 h-full p-1 px-2' onClick={() => setThemeState(userTheme.light)}>
                    <LampDeskIcon className={`w-5 h-auto text-gumpix-pink dark:text-gumpix-pink-light ${(themeState === userTheme.light ? '' : 'opacity-30')}`} />
                </div>
                <span className={`absolute top-1/2 transform -translate-y-1/2 pb-1 left-2/4 -translate-x-2/4 text-base font-bold ${themeState === userTheme.light ? 'text-gumpix-pink' : 'text-gumpix-pink-light'}`}>|</span>
                <div className='cursor-pointer w-2/4 h-full p-1 px-2' onClick={() => setThemeState(userTheme.dark)}>
                    <MoonIcon className={`w-5 h-auto text-gumpix-pink dark:text-gumpix-pink-light ${(themeState === userTheme.dark ? '' : 'opacity-40')}`} />
                </div>
            </section>
        </header>
    )
}