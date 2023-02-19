import React, { useState, useEffect } from "react";
import Cards from './Cards';
import _ from 'lodash';

const Board = () => {
	const [cards, setCards] = useState([]);
	const values = [
		'Gallina', 'Pato', 'Perro', 'Mosca', 'Tiburón', 'Chivo', 'Gato', 'Pez'
	];
	const [game, setGame] = useState({
		matches: 0,
		clickEnabled: false
	});
	const [demo, setDemo] = useState({
		lastFlippedId: null,
		numberOfCycles: 0,
		totalOfCycle: 11
	});

	const handleClick = (e, id) => {
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
	}

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
						id={cards[index].id}
						isFlipped={cards[index].isFlipped}
						value={cards[index].value}
						isMatched={cards[index].isMatched}
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
		if(!cards.length) {
			setDemo({...demo, lastFlippedId: 0}); // <-- this assign meant to be for triggering the dependency so useEffect runs again
			return;
		}
		let tempCards = cards.slice();
		let randomCardId = null;

		setTimeout(() => {
			if(demo.lastFlippedId !== null)
				tempCards[demo.lastFlippedId].isFlipped = false;

			do {
				randomCardId = Math.floor(Math.random() * cards.length);
			} while (randomCardId === demo.lastFlippedId);

			if (demo.numberOfCycles < demo.totalOfCycle) { // <-- when this count is reach, the demo process stops ('demo.lastFlippedId' dependency will no longer updated)
				tempCards[randomCardId].isFlipped = true;
				setCards(tempCards);
				setDemo({...demo, lastFlippedId: randomCardId, numberOfCycles: demo.numberOfCycles + 1});
			} else {
				setGame({...game, clickEnabled: true})
			}
			}, 475);
	}, [demo.lastFlippedId]);

	return (
		<div className="main-container">
			<div className="board">
				{DrawCards()}
			</div>
		</div>
	)
}

export default Board;