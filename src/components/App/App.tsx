/**
 * App Component - Main popup application layout
 * @author AzanoRivers | Manually created
 */
import { Footer, Header } from '@/components';

export function App() {

  return (
    <main className='flex justify-center items-center h-full w-full'>
      <Header />
      <footer className='fixed bottom-0 left-0 w-full px-2'>
        <Footer />
      </footer>
    </main>
  );
}
