import React from 'react';
import { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
	const inputRef = useRef();
	const onButtonClick = (e) => {
		e.preventDefault();
		inputRef.current.click();
	};

	const onChange = async (e) => {
		const uploaded = await imageUploader.upload(e.target.files[0]);
		console.log(uploaded);
		onFileChange({
			name: uploaded.original_filename,
			url: uploaded.url,
		});
	};

	return (
		<div className={styles.container}>
			<input
				ref={inputRef}
				type='file'
				accept='image/*'
				name='file'
				className={styles.input}
				onChange={onChange}
			></input>
			<button className={styles.button} onClick={onButtonClick}>
				{name || 'No file'}
			</button>
		</div>
	);
};

export default ImageFileInput;
