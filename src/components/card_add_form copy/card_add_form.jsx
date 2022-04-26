import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
	const formRef = useRef();
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	const [file, setFile] = useState({ fileName: null, fileURL: null });

	const onFileChange = (file) => {
		console.log(file);
		setFile({ fileName: file.name, fileURL: file.url });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const card = {
			id: Date.now(), //uuid
			name: nameRef.current.value || '',
			company: companyRef.current.value || '',
			theme: themeRef.current.value,
			title: titleRef.current.value || '',
			email: emailRef.current.value || '',
			message: messageRef.current.value || '',
			fileName: file.fileName || '',
			fileURL: file.fileURL || '',
		};
		formRef.current.reset();
		setFile({ fileName: null, fileURL: null });
		onAdd(card);
	};

	return (
		<form ref={formRef} action='' className={styles.form}>
			<input
				ref={nameRef}
				type='text'
				name='name'
				className={styles.input}
				placeholder='Name'
			/>
			<input
				ref={companyRef}
				type='text'
				name='company'
				className={styles.input}
				placeholder='Company'
			/>
			<select
				ref={themeRef}
				className={styles.select}
				name='theme'
				placeholder='theme'
			>
				<option placeholder='dark'>dark</option>
				<option placeholder='light'>light</option>
				<option placeholder='pink'>pink</option>
			</select>
			<input
				ref={titleRef}
				type='text'
				name='title'
				className={styles.input}
				placeholder='Title'
			/>
			<input
				ref={emailRef}
				type='email'
				name='email'
				className={styles.input}
				placeholder='email'
			/>
			<textarea
				ref={messageRef}
				className={styles.textarea}
				name='message'
				placeholder='Message'
			/>

			<div className={styles.fileInput}>
				<FileInput name={file.fileName} onFileChange={onFileChange} />
			</div>
			<div className={styles.button}>
				<Button className={styles.button} name='Add' onClick={onSubmit} />
			</div>
		</form>
	);
};

export default CardAddForm;
