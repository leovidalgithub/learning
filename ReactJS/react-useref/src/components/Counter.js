import React, { useEffect, useState, useRef } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const timer = useRef(0);
	const numberOfStateHasChanged = useRef(0);

	useEffect(() => {
		if(numberOfStateHasChanged.current === 0) // <--- this prevent the below message from being displayed the first time useEffect runs
			return;

		console.debug(`Count state has changed! ${ numberOfStateHasChanged.current++ } times`);
	}, [count]);

	useEffect(() => {
		timer.current = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1115);
		numberOfStateHasChanged.current = 1;
	}, []);

	const handleDoubleClick = e => {
		clearInterval(timer.current);
		console.log('counting stopped');
	}

	return (
		<div>
			<hr/>
			<p>Count = {count} ... has changed {numberOfStateHasChanged.current} times</p>
			<button onDoubleClick={handleDoubleClick}>Stop counting (double click)</button>
		</div>
	)
}

export default Counter;