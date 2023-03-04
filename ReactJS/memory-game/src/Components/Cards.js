import React from "react";
import ReactCardFlip from 'react-card-flip';

const Cards = (props) => {

console.count('Cards render #' + props.id);

	return (
		<ReactCardFlip isFlipped={props.isFlipped || props.isMatched} flipDirection="horizontal">
			<div
				className={`card front ${props.clickEnabled && !props.isMatched ? 'click-enabled' : ''}`}
				onClick={props.clickEnabled && !props.isMatched ? props.onClick : undefined}
			>
				Card<br/>#{props.id + 1}
			</div>
			<div className="card back">
				{props.value}
			</div>
		</ReactCardFlip>
	)
}

export default React.memo(Cards);