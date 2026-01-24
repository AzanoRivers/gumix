import { Footer, Header, CardSwap } from '@/components';
import { useLocalStorage } from '@/hooks/useLocalStorage';
/**
 * App Component - Main popup extension layout
 * @author AzanoRivers | Manually created
 */
export function App() {
  // [STATES]
  const [, setActiveHud,] = useLocalStorage<boolean>('userActiveHud', false);
  // [FUNCTIONS]
  const onSetActiveHud = async () => {
    await setActiveHud(true);
  }
  const offSetActiveHud = async () => {
    await setActiveHud(false);
  }
  // [RENDER]
  return (
    <main className='h-full w-full flex flex-col justify-between items-center'>
      <section className='h-[20%] w-full'>
        <Header />
      </section>
      <section className='h-[70%] w-full flex flex-col justify-center items-center px-2'>
        <CardSwap onFunction={onSetActiveHud} offFunction={offSetActiveHud} />
      </section>
      <footer className='h-[10%] flex flex-col w-full px-2 mb-1'>
        <Footer />
      </footer>
    </main>
  );
}
