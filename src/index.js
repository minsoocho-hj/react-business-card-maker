import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Authservice from './services/auth_service';

const authService = new Authservice();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App authService={authService} />
	</React.StrictMode>
);
