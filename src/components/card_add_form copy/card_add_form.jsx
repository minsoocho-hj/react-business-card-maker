import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = () => {
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const onSubmit = () => {};
	return (
		<form action='' className={styles.form}>
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
			<div>
				<div className={styles.fileInput}>
					<ImageFileInput />
				</div>
				<div className={styles.button}>
					<Button
						className={styles.button}
						name='Add'
						onClick={() => onSubmit}
					/>
				</div>
			</div>
		</form>
	);
};

export default CardAddForm;
