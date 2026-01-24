/**
 * Popup Entry Point - Extension popup UI initialization
 * @author AzanoRivers | VibeCoding with Claude Sonnet 4.5
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/components';
import { GumixProvider } from '@/context/GumixContext';
import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GumixProvider>
      <App />
    </GumixProvider>
  </React.StrictMode>,
);
