import React from 'react';
import styles from './nameCard.module.css';

const NameCard = ({ card }) => {
	const { name, company, title, email, message, theme, fileURL } = card;
	const DEFAULT_IMAGE = '/images/default_logo.png';
	const URL = fileURL || DEFAULT_IMAGE;
	return (
		<li className={styles.card}>
			<img src={URL} alt='profile' className={styles.img} />
			<div className={styles.detail}>
				<p className={styles.name}>{name}</p>
				<p className={styles.company}>{company}</p>
				<p className={styles.title}>{title}</p>
				<p className={styles.email}>{email}</p>
				<p className={styles.message}>{message}</p>
				<p className={styles.theme}>{theme}</p>
			</div>
		</li>
	);
};
export default NameCard;
