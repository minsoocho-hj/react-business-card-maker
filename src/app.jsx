import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './app.module.css';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ FileInput, authService }) {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Routes>
					<Route exact path='/' element={<Login authService={authService} />} />
					<Route
						path='/maker'
						element={<Maker authService={authService} FileInput={FileInput} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
