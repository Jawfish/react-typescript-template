import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { TooltipProvider } from '@/components/shadcn/ui/tooltip';
import { Toaster } from 'sonner';
import App from './app';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
    <Toaster />
  </React.StrictMode>
);
