import React from 'react';
import styles from './nameCard.module.css';

const NameCard = ({ card }) => {
	const { name, company, title, email, message, theme, fileURL } = card;
	const DEFAULT_IMAGE = '/images/default_logo.png';
	const URL = fileURL || DEFAULT_IMAGE;
	return (
		<li className={`${styles.card} ${pickTheme(theme)}`}>
			<img src={URL} alt='profile' className={styles.avatar} />
			<div className={styles.info}>
				<h1 className={styles.name}>{name}</h1>
				<p className={styles.company}>{company}</p>
				<p className={styles.title}>{title}</p>
				<p className={styles.email}>{email}</p>
				<p className={styles.message}>{message}</p>
			</div>
		</li>
	);

	function pickTheme(theme) {
		switch (theme) {
			case 'dark':
				return styles.dark;
			case 'light':
				return styles.light;
			case 'pink':
				return styles.pink;
			default:
				throw new Error(`unknown theme: ${theme}`);
		}
	}
};
export default NameCard;
