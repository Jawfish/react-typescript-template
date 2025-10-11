import './index.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/shadcn/ui/tooltip';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent'
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
    <Toaster />
  </React.StrictMode>
);
