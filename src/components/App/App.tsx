import { LogoGumix } from '@/components';
import './App.css';

export function App() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <LogoGumix size={64} />
      <h1 className="text-2xl font-bold">Gumix HUD</h1>
    </div>
  );
}
