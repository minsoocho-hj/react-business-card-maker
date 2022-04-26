import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = (props) => (
	<button type='file' className={styles.image}>
		image
	</button>
);

export default ImageFileInput;
