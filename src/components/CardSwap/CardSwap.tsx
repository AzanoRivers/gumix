import { useEffect, useState } from 'react';
interface CardSwapProps {
  on?: string;
  off?: string;
  onFunction?: () => Promise<void>;
  offFunction?: () => Promise<void>;
}
/**
* CardSwap Component - Reusable Swap Card for various uses
* @author AzanoRivers | Manually created
* @param on (String) Text for the "ON" state
* @param off (String) Text for the "OFF" state
* @param onFunction (Async Function) Function to execute when switched to "ON"
* @param offFunction (Async Function) Function to execute when switched to "OFF"
*/
export function CardSwap({ on = "ON", off = "OFF", onFunction = async () => { }, offFunction = async () => { } }: CardSwapProps) {
  // [STATES]
  const [stateSwap, setStateSwap] = useState<boolean>(false);
  // [FUNCTIONS]
  const handleSwap = () => {
    document.startViewTransition(() => {
      setStateSwap(!stateSwap);
    });
  }
  // [EFFECTS]
  useEffect(() => {
    if (stateSwap) {
      onFunction();
    } else {
      offFunction();
    }
  }, [stateSwap]);

  // [RENDER]
  return (
    <article className="h-full w-full flex justify-center items-center">
      <div className="flex h-14 w-44 border-2 border-gumpix-pink dark:border-gumpix-pink-light rounded-md cursor-pointer text-gumpix-pink/30 dark:text-gumpix-pink-light/40" onClick={handleSwap}>
        <div className={`w-2/4 h-full flex items-center justify-center text-4xl font-jersey  ${stateSwap && "font-bold bg-gumpix-pink text-gumpix-pink-light dark:text-background dark:bg-gumpix-pink-light"}`}>
          {on}
        </div>
        <div className={`w-2/4 h-full flex items-center justify-center text-4xl font-jersey  ${!stateSwap && "font-bold bg-gumpix-pink dark:bg-gumpix-pink-light text-gumpix-pink-light dark:text-background"}`}>
          {off}
        </div>
      </div>
    </article>
  )
}
