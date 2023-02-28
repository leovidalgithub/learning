import React, { useRef } from "react";

const PressButtons = () => {
	const count = useRef(0);

	const handleClick = (e, flag) => {
		if (flag) {
			count.current++;
		} else {
			count.current--;
		}
		console.log('Count=', count.current);
	}

	return (
		<div>
			<button onClick={(e) => handleClick(e, false)}>Decrease</button>
			<button onClick={(e) => handleClick(e, true)}>Increase</button>
		</div>
	)
}

export default PressButtons;