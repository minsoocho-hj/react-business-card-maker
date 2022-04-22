import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard }) => {
	const { name, company, title, email, message, theme, fileURL } = card;
	const onSubmit = () => {
		console.log('onSubmit');
	};
	return (
		<form action='' className={styles.form}>
			<input
				type='text'
				className={styles.input}
				placeholder='Name'
				value={name}
			/>
			<input
				type='text'
				className={styles.input}
				placeholder='Company'
				value={company}
			/>
			<select className={styles.select} name='theme' value={theme}>
				<option value='dark'>dark</option>
				<option value='light'>light</option>
				<option value='pink'>pink</option>
			</select>
			<input
				type='text'
				className={styles.input}
				placeholder='Title'
				value={title}
			/>
			<input
				type='email'
				className={styles.input}
				placeholder='email'
				value={email}
			/>
			<textarea
				className={styles.textarea}
				name='message'
				placeholder='Message'
				value={message}
			/>
			<div className={styles.fileInput}>
				<ImageFileInput />
			</div>
			<div className={styles.button}>
				<Button onClick={onSubmit} />
			</div>
		</form>
	);
};

export default CardEditForm;
