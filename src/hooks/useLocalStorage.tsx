import { storage } from '@wxt-dev/storage';
/**
 * Custom hook for managing Chrome extension storage with React state synchronization.
 * 
 * @template T - Data type to store (string, number, object, array, etc.)
 * @param key - Unique identifier for the value in storage (without 'local:' prefix)
 * @param initValue - Initial value if nothing is saved
 * @returns Array with [value, setter, isLoading]
 * 
 * @example
 * const [theme, setTheme, isLoading] = useLocalStorage<string>('userTheme', 'dark');
 * await setTheme('light'); // Automatically saves to chrome.storage.local
 * 
 * @author AzanoRivers | Claude Sonnet 4.5
 */
export function useLocalStorage<T>(key: string, initValue: T) {
    // [STATES]
    const [storedValue, setStoredValue] = useState<T>(initValue);
    const [isLoading, setIsLoading] = useState(true);
    // [EFFECTS]
    useEffect(() => {
        const loadValue = async () => {
            try {
                const item = await storage.getItem<T>(`local:${key}`);
                if (item !== null) {
                    setStoredValue(item);
                }
            } catch (error) {
                console.error('Error loading from storage:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadValue();
    }, [key]);
    // [FUNCTIONS]
    /**
     * Setter function that saves value to storage.
     * Supports two usage patterns (same as useState):
     * 
     * @example
     * // Pattern 1: Direct value
     * await setTheme('light');
     * 
     * @example
     * // Pattern 2: Updater function (receives previous value)
     * await setTheme(prev => prev === 'dark' ? 'light' : 'dark');
     */
    const setValue = async (value: T | ((val: T) => T)) => {
        try {
            setIsLoading(true);
            // Allow value to be a function so we have the same API as useState 
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            await storage.setItem(`local:${key}`, valueToStore);
        } catch (error) {
            console.error('Error saving to storage:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return [storedValue, setValue, isLoading] as const;
}