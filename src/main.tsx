import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/shadcn/ui/tooltip';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
    <Toaster />
  </React.StrictMode>
);
