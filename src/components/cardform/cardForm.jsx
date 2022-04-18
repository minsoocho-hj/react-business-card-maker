import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './cardform.module.css';

const CardForm = ({ cards, updateCard }) => {
	return (
		<section className={styles.form}>
			<h1 className={styles.title}>Card form</h1>
			{cards.map((card) => (
				<CardEditForm card={card} updateCard={updateCard} />
			))}
		</section>
	);
};

export default CardForm;
