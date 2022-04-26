import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
	const { name, company, title, email, message, theme, fileURL } = card;

	return (
		<form className={styles.form}>
			<input
				type='text'
				className={styles.input}
				placeholder='Name'
				defaultValue={name}
			/>
			<input
				type='text'
				className={styles.input}
				placeholder='Company'
				defaultValue={company}
			/>
			<select className={styles.select} name='theme' defaultValue={theme}>
				<option defaultValue='dark'>dark</option>
				<option defaultValue='light'>light</option>
				<option defaultValue='pink'>pink</option>
			</select>
			<input
				type='text'
				className={styles.input}
				placeholder='Title'
				defaultValue={title}
			/>
			<input
				type='email'
				className={styles.input}
				placeholder='email'
				defaultValue={email}
			/>
			<textarea
				className={styles.textarea}
				name='message'
				placeholder='Message'
				defaultValue={message}
			/>
			<div className={styles.fileInput}>
				<ImageFileInput />
			</div>
			<div className={styles.button}>
				<Button name='Delete' />
			</div>
		</form>
	);
};

export default CardEditForm;
