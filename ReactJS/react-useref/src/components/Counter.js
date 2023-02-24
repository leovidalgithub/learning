import React, { useEffect, useState, useRef } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const timer = useRef(0);

	useEffect(() => {
		timer.current = setInterval(() => {
			console.log('suma');
			setCount(prevCount => prevCount + 1);
		}, 1000);

	}, []);

	const handleDoubleClick = e => {
		clearInterval(timer.current);
		console.log('counting stopped');
	}

	console.log('RENDER --> Counter ***');

	return (
		<div>
			<hr/>
			<p>Count = {count}</p>
			<button onDoubleClick={handleDoubleClick}>Stop counting (double click)</button>
		</div>
	)
}

export default Counter;