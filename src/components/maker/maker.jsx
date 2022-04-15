import React, { useEffect } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Maker = ({ authService }) => {
	const history = useNavigate();

	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				// go to main page
				history('/');
			}
		});
	});

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.content}>this is maker section</div>
			<Footer />
		</section>
	);
};

export default Maker;
