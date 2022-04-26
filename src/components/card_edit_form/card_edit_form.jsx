import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
// import FileInput from './services/image_uploader';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
	const { name, company, title, email, message, theme, fileName, fileURL } =
		card;
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const onFileChange = (file) => {
		updateCard({
			...card,
			fileName: file.name,
			fileURL: file.url,
		});
	};

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
				name='name'
				className={styles.input}
				value={name}
				onChange={onChange}
			/>
			<input
				type='text'
				name='company'
				ref={companyRef}
				className={styles.input}
				value={company}
				onChange={onChange}
			/>
			<select
				className={styles.select}
				name='theme'
				ref={themeRef}
				value={theme}
				onChange={onChange}
			>
				<option value='dark'>dark</option>
				<option value='light'>light</option>
				<option value='pink'>pink</option>
			</select>
			<input
				type='text'
				name='title'
				ref={titleRef}
				className={styles.input}
				value={title}
				onChange={onChange}
			/>
			<input
				type='email'
				ref={emailRef}
				name='email'
				className={styles.input}
				value={email}
				onChange={onChange}
			/>
			<textarea
				className={styles.textarea}
				ref={messageRef}
				name='message'
				value={message}
				onChange={onChange}
			/>
			<div className={styles.fileInput}>
				<FileInput name={fileName} onFileChange={onFileChange} />
			</div>
			<div className={styles.button}>
				<Button name='Delete' onClick={onSubmit} />
			</div>
		</form>
	);
};

export default CardEditForm;
