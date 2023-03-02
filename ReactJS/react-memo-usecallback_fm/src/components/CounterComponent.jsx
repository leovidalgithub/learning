import React from "react";

const CounterComponent = ({ number, count, handleClick }) => {

	console.debug(`Counter ${number} render!`);

	return (
		<div className="counter-box">
			<h4>Contador {number}</h4>
			<h1>{count}</h1>
			<button onClick={handleClick}>+1</button>
		</div>
	)
}

export default React.memo(CounterComponent);
/* even using 'memo' hoc, if any props or context value changes, the component will be rendered again */