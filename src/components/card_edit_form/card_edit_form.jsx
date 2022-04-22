import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard }) => (
	<form action='' className={styles.form}>
		<input type='file' placeholder='Upload your profile image' />
		<input type='text' placeholder='Name' />
		<input type='text' placeholder='Company' />
		<input type='text' placeholder='Title' />
		<input type='email' placeholder='email' />
		<input type='text' placeholder='Message' />
		<select name='theme'>
			<option value='dark'>dark</option>
			<option value='light'>light</option>
			<option value='pink'>pink</option>
		</select>
	</form>
);

export default CardEditForm;
