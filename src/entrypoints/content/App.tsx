import { useState } from 'react';
import { LogoGumix } from '@/components';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-999999">
      <div className="flex items-center gap-2 mb-2">
        <LogoGumix size={32} />
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Gumix HUD
        </h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        Active on Pixels.xyz
      </p>
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-2 bg-[--color-primary] text-white rounded-md hover:opacity-90 transition-opacity font-medium"
          onClick={() => setCount(count + 1)}
        > Count: {count}
        </button>
      </div>
    </div>
  );
}
