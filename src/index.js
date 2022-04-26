import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Authservice from './services/auth_service';
import ImageUploader from './services/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new Authservice();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
	<ImageFileInput {...props} imageUploader={imageUploader} />
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App authService={authService} FileInput={FileInput} />
	</React.StrictMode>
);
