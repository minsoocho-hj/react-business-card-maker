import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import CardForm from '../cardform/cardForm';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService }) => {
	const history = useNavigate();
	const [cards, setCards] = useState({
		1: {
			id: 1,
			name: 'Minsoo',
			company: 'company.co',
			title: 'Web developer',
			email: 'minsooocho@gmail.com',
			message: 'Go for it!',
			theme: 'dark',
			fileName: 'minsoo',
			fileURL: 'default_logo.png',
		},
		2: {
			id: 2,
			name: 'John',
			company: 'Google',
			title: 'Product specialist',
			email: 'alessandro@gmail.com',
			message: 'Ciao',
			theme: 'pink',
			fileName: 'alex',
			fileURL: null,
		},
		3: {
			id: 3,
			name: 'Hyunjin',
			company: 'company.co',
			title: 'CEO',
			email: 'hj@gmail.com',
			message: 'Go for it!',
			theme: 'light',
			fileName: 'hj',
			fileURL: null,
		},
	});

	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				// go to main page
				history('/');
			}
		});
	});

	const createOrUpdateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};
	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<CardForm
					FileInput={FileInput}
					cards={cards}
					addCard={createOrUpdateCard}
					updateCard={createOrUpdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
