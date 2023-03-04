import React, { useState, useEffect, useCallback } from "react";
import Cards from './Cards';
import _ from 'lodash';

const Board = () => {
	const values = [
		'Gallina', 'Pato', 'Perro', 'Mosca', 'Tiburón', 'Chivo', 'Gato', 'Pez'
	];
	const [cards, setCards] = useState([]);
	const [game, setGame] = useState({
		matches: 0,
		clickEnabled: false
	});
	const [demo, setDemo] = useState({
		lastFlippedId: null,
		numberOfCycles: 0,
		totalOfCycles: 3,
		finish: false
	});

	const handleClick = useCallback((e, id) => {
		let tempCards = cards.slice();
		tempCards[id].isFlipped = !tempCards[id].isFlipped;
		setCards(tempCards);

		const flippedCards = tempCards.filter(card => {
			return card.isFlipped;
		});

		if (flippedCards.length === 2) {
			setGame({ ...game, clickEnabled: false });

			verifyMatchandWin(flippedCards);
		}
	}, [cards])

	const verifyMatchandWin = (flippedCards) => {
		let matched = false;
		let tempGame = {...game};
		let tempCards = cards.slice();
		tempGame.clickEnabled = true;

		if (flippedCards[0].value === flippedCards[1].value) {
			tempGame.matches++;
			matched = true;
		}

		setTimeout(() => {
			flippedCards.forEach((card, index) => {
				if (matched) {
					tempCards[card.id].isMatched = true;
				}

				tempCards[card.id].isFlipped = false;
				});
				setGame(tempGame);
		}, 2000);
	};

	const DrawCards = () => {
		return cards.map((card, index) => {
			return (
					<Cards
						key={index}
						id={card.id}
						isFlipped={card.isFlipped}
						value={card.value}
						isMatched={card.isMatched}
						clickEnabled={game.clickEnabled}
						onClick={(e) => handleClick(e, index)}
					/>
			)
		})
	}

	useEffect(() => {
		// shuffling a duplicate of 'values' array
		const gameValues = _.shuffle([...values, ...values]);
		let tempCards = cards.slice();

		gameValues.forEach((value, index) => {
			tempCards.push({
				"id": index,
				"value": value,
				"isFlipped": false,
				"isMatched": false
			})
		});

		setCards(tempCards);
	}, []);

	useEffect(() => {
		if (!cards.length || demo.finish)
			return;

		let tempCards = cards.slice();
		let randomCardId = null;

		setTimeout(() => {
			if(demo.lastFlippedId !== null)
				tempCards[demo.lastFlippedId].isFlipped = false;

			do {
				randomCardId = Math.floor(Math.random() * cards.length);
			} while (randomCardId === demo.lastFlippedId);

			if (demo.numberOfCycles < demo.totalOfCycles) { // <-- demo process stops when the 'totalOfCycles' is reached, and, therefore 'cards' is no longer updated
				tempCards[randomCardId].isFlipped = true;
				setCards(tempCards);
				setDemo({...demo, lastFlippedId: randomCardId, numberOfCycles: demo.numberOfCycles + 1});
			} else {
				setGame({ ...game, clickEnabled: true})
				setDemo({ ...demo, finish: true});
			}
		}, 575);
	}, [cards]);

	return (
		<div className="main-container">
			<div className="board">
				{DrawCards()}
			</div>
		</div>
	)
}

export default Board;