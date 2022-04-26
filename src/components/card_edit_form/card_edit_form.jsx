import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
	const { name, company, title, email, message, theme, fileName, fileURL } =
		card;
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	const onChange = (e) => {
		if (e.currentTarget == null) {
			return;
		}
		e.preventDefault();
		updateCard({ ...card, [e.currentTarget.name]: e.currentTarget.value });
	};

	const onSubmit = () => {
		deleteCard(card);
	};

	return (
		<form className={styles.form}>
			<input
				ref={nameRef}
				type='text'
				className={styles.input}
				placeholder='Name'
				defaultValue={name}
				onChange={onChange}
			/>
			<input
				type='text'
				ref={companyRef}
				className={styles.input}
				placeholder='Company'
				defaultValue={company}
				onChange={onChange}
			/>
			<select
				className={styles.select}
				name='theme'
				ref={themeRef}
				defaultValue={theme}
				onChange={onChange}
			>
				<option defaultValue='dark'>dark</option>
				<option defaultValue='light'>light</option>
				<option defaultValue='pink'>pink</option>
			</select>
			<input
				type='text'
				ref={titleRef}
				className={styles.input}
				placeholder='Title'
				defaultValue={title}
				onChange={onChange}
			/>
			<input
				type='email'
				ref={emailRef}
				className={styles.input}
				placeholder='email'
				defaultValue={email}
				onChange={onChange}
			/>
			<textarea
				className={styles.textarea}
				ref={messageRef}
				name='message'
				placeholder='Message'
				defaultValue={message}
				onChange={onChange}
			/>
			<div className={styles.fileInput}>
				<ImageFileInput />
			</div>
			<div className={styles.button}>
				<Button name='Delete' onClick={onSubmit} />
			</div>
		</form>
	);
};

export default CardEditForm;
