import React, { useRef } from "react";

const AutoFocus = () => {
	const inputRef = useRef(null);

	const handleOnFocus = e => {
		inputRef.current.focus();
		inputRef.current.style.border = '3px solid crimson';
	}

	console.log('RENDER --> AutoFocus ***');

	return (
		<div>
			<hr />
			<input type="text" ref={inputRef} />&nbsp;
			<button onClick={handleOnFocus}>Input focus</button>
		</div>
	)
}

export default AutoFocus;