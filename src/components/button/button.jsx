import React from 'react';
import styles from './button.module.css';

const Button = ({ name, onClick }) => {
	return (
		<button className={styles.btn_submit} onClick={onClick}>
			Create
		</button>
	);
};

export default Button;
