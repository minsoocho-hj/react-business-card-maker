import React from 'react';
import NameCard from '../nameCard/nameCard';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
	<section className={styles.preview}>
		<h1 className={styles.title}>Card preview</h1>
		<ul className={styles.nameCardList}>
			{cards.map((card) => (
				<NameCard card={card} key={card.id} />
			))}
		</ul>
	</section>
);

export default Preview;
