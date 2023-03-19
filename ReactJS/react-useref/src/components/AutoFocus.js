import React, { useRef } from "react";

const AutoFocus = () => {
	const inputRef1 = useRef(null);
	const inputRef2 = useRef(null);

	const handleOnFocus1 = e => {
		inputRef1.current.focus();
		inputRef1.current.style.border = '5px solid crimson';
		inputRef1.current.addEventListener('blur', function(e) {
			inputRef1.current.style.border = 'none';
		})
	}

	return (
		<div>
			<hr />
			<input type="text" ref={inputRef1} />&nbsp;
			<button onClick={handleOnFocus1}>Input focus()</button><br/>
			<input type="text" ref={inputRef2} />&nbsp;
			<button onClick={() => inputRef2.current.select()}>Input select()</button>
		</div>
	)
}

export default AutoFocus;