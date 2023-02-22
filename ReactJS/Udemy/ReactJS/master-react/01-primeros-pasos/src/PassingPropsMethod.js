import React, { useState } from "react";

const PassingPropsMethod = ({ methodSentToChild, buttonLabel }) => { // const PassingPropsMethod = (props) => {
	return (
		<div>
			<p>Passing a method to a child componenet</p>
			<button onDoubleClick={(e) => methodSentToChild(e, 'sending this msg to console')}>{buttonLabel}</button>
		</div>
	)
}

export default PassingPropsMethod;