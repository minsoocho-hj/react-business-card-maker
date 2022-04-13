import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
	return (
		<header className={styles.header}>
			{onLogout && (
				<button className={styles.logout} onClick={onLogout}>
					Log out
				</button>
			)}
			<img src='./images/logo.png' alt='logo' className={styles.logo} />
			<h1 className={styles.title}>Business card maker</h1>
		</header>
	);
};

export default Header;
