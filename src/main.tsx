import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client.js';

import App from './App';

createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
