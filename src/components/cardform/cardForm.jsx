import React from 'react';
import CardAddForm from '../card_add_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './cardform.module.css';

const CardForm = ({ cards, addCard }) => {
	return (
		<section className={styles.form}>
			<h1 className={styles.title}>Card form</h1>
			<ul className={styles.editors}>
				{cards.map((card) => (
					<CardEditForm key={card.id} card={card} />
				))}
				<CardAddForm onAdd={addCard} />
			</ul>
		</section>
	);
};

export default CardForm;
