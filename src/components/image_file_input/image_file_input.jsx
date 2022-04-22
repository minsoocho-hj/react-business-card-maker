import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = (props) => (
	<input type='file' className={styles.image} />
);

export default ImageFileInput;
