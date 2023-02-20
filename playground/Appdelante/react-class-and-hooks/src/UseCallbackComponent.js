import React, { useState, useCallback } from "react";

const IncrementButton = ({Increment}) => {
	return (
		<button onClick={Increment}>Click me</button>
	)
};

export default function UsingCallback() {
	const [counter, setCounter] = useState(0);

	const Increment = useCallback(() => {
		setCounter(prevCounter => prevCounter + 1);
	}, []);

	return (
		<div>
			Using useCallback and 'prevCounter' state -- Counter: {counter}&nbsp;&nbsp;
			<IncrementButton
				Increment={Increment}
			/>
		</div>
	)
}