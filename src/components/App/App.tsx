/**
 * App Component - Main popup application layout
 * @author AzanoRivers | Manually created
 */
import { Footer, Header, CardSwap } from '@/components';

export function App() {

  return (
    <main className='h-full w-full flex flex-col justify-between items-center'>
      <section className='h-[20%] w-full'>
        <Header />
      </section>
      <section className='h-[70%] w-full flex justify-center items-center px-2'>
        <CardSwap />
      </section>
      <footer className='h-[10%] flex flex-col w-full px-2 mb-1'>
        <Footer />
      </footer>
    </main>
  );
}
