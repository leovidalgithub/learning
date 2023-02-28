import React, { useRef } from "react";

const AutoFocus = () => {
	const inputRef = useRef(null);

	const handleOnFocus = e => {
		inputRef.current.focus();
		inputRef.current.style.border = '5px solid crimson';
		inputRef.current.addEventListener('blur', function(e) {
			inputRef.current.style.border = 'none';
		})
	}

	return (
		<div>
			<hr />
			<input type="text" ref={inputRef} />&nbsp;
			<button
				onClick={handleOnFocus}
			>
				Input focus
			</button>
		</div>
	)
}

export default AutoFocus;