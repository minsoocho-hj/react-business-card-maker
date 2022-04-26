import React from 'react';
import CardAddForm from '../card_add_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './cardform.module.css';

const CardForm = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
	return (
		<section className={styles.form}>
			<h1 className={styles.title}>Card form</h1>
			<ul className={styles.editors}>
				{Object.keys(cards).map((key) => (
					<CardEditForm
						key={key}
						FileInput={FileInput}
						card={cards[key]}
						updateCard={updateCard}
						deleteCard={deleteCard}
					/>
				))}
				<CardAddForm FileInput={FileInput} onAdd={addCard} />
			</ul>
		</section>
	);
};

export default CardForm;
