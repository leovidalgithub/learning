import React from "react";
import ReactCardFlip from 'react-card-flip';

const Cards = (props) => {
	const handleClick = function(e) {
		e.preventDefault();
		console.log(e);
		// this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	};

	return (
		<ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
			<div
				className={`card front ${props.clickEnabled ? 'click-enabled' : ''}`}
				onClick={props.clickEnabled ? props.onClick : undefined}
			>
				Card #{props.id + 1}
			</div>
			<div className="card back">
				{props.value}
			</div>
		</ReactCardFlip>
	)
}

export default Cards;