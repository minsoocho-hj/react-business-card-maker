import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import styles from './login.module.css';

const Login = ({ authService }) => {
	const history = useNavigate();
	const goToMaker = (userId) => {
		history({ pathname: '/maker', id: userId });
	};

	const onLogin = (e) => {
		authService //
			.login(e.currentTarget.textContent)
			.then((data) => goToMaker(data.user.uid));
	};

	useEffect(() => {
		authService.onAuthChange((user) => user && goToMaker(user.uid));
	});

	return (
		<section className={styles.login}>
			<Header />
			<section>
				<ul className={styles.list}>
					<li className={styles.item}>
						<button className={styles.logInButton} onClick={onLogin}>
							Google
						</button>
					</li>
					<li className={styles.item}>
						<button className={styles.logInButton} onClick={onLogin}>
							Github
						</button>
					</li>
				</ul>
			</section>
			<Footer />
		</section>
	);
};

export default Login;
