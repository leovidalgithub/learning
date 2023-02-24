import React, { useRef, useState, useEffect } from "react";

const PreviousMessage = () => {
	const [message, setMessage] = useState('');
	const prevMessage = useRef('');

	useEffect(() => {
		prevMessage.current = message;
	}, [message]);

	const handleOnChange = e => {
		console.log('Message changed');
		setMessage(e.target.value);
	}

	console.log('RENDER --> PreviousMessage ***');

	return (
		<div>
			<hr />
			<input type="text" onChange={handleOnChange} />&nbsp;
			<p>Message = {message}</p>
			<p>Previous Message = {prevMessage.current}</p>
		</div>
	)
}

export default PreviousMessage;