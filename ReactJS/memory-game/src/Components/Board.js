import React, { useState, useEffect } from "react";
import Cards from './Cards';
import _ from 'lodash';

const Board = () => {
	const [cards, setCards] = useState([]);
	const [lastFlippedId, setLastFlippedId] = useState(null);
	const values = [
		'Gallina', 'Pato', 'Perro', 'Mosca', 'Rinoceronte', 'Chivo', 'Gato', 'Pez'
	];
	const [game, setGame] = useState({
		matches: 0,
		clickEnabled: true
	});

	const handleClick = (id) => {
		let tempCards = cards.slice();
		tempCards[id].isFlipped = !tempCards[id].isFlipped;

		const flippedCards = tempCards.filter(card => {
			return card.isFlipped;
		});

		if (flippedCards.length === 2) {
			let tempGame = {...game};
			tempGame.clickEnabled = false;

			if (verifyMatch(flippedCards)) {
				tempGame.matches ++;
				if (tempGame.matches === cards.length + 1) {
					console.log('Tenemos un ganador!');
				}
			}

			setGame(tempGame);
			setTimeout(() => {
				setGame({...game, clickEnabled: true})
			}, 2000);

		// 	verifyMatch(flippedCards, tempCards)
		// } else {
		}

		setCards(tempCards);
	}

	const verifyMatch = (flippedCards) => {
		return (flippedCards[0].value === flippedCards[1].value);
	};

	const DrawCards = () => {
		return cards.map((card, index) => {
			return (
					<Cards
						key={index}
						id={cards[index].id}
						isFlipped={cards[index].isFlipped}
						value={cards[index].value}
						clickEnabled={game.clickEnabled}
						onClick={() => handleClick(index)}
					/>
			)
		})
	}

	useEffect(() => {
		// shuffling a duplicate of 'values'
		const gameValues = _.shuffle([...values, ...values]);
		let tempCards = cards.slice();

		gameValues.forEach((value, index) => {
			tempCards.push({
				"id": index,
				"value": value,
				"isFlipped": false
			})
		});

		setCards(tempCards);
		}, []);

	// useEffect(() => {
	// 	if(!cards.length)
	// 		return;

	// 	let tempCards = cards.slice();
	// 	let randomCardId = null;

	// 	setTimeout(() => {
	// 		if(lastFlippedId !== null)
	// 			tempCards[lastFlippedId].isFlipped = false;

	// 		do {
	// 			randomCardId = Math.floor(Math.random() * cards.length);
	// 		} while (randomCardId === lastFlippedId);

	// 		tempCards[randomCardId].isFlipped = true;
	// 		setCards(tempCards);
	// 		setLastFlippedId(randomCardId);
	// 	}, 2270);
	// }, [cards]);

	return (
		<div className="main-container">
			<div className="board">
				{DrawCards()}
			</div>
		</div>
	)
}

export default Board;