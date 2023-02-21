import React, { useState } from "react";

const PassingPropsMethod = (props) => {
	return (
		<div>
			<p>Passing a method to a child componenet</p>
			<button onDoubleClick={(e) => props.methodSentToChild(e, 'sending this msg to console')}>{props.buttonLabel}</button>
		</div>
	)
}

export default PassingPropsMethod;