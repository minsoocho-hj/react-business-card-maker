import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard }) => (
	<div className='form'>{card.id}</div>
);

export default CardEditForm;
