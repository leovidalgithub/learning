import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

export function LastComponent(props) {
	return (
		<div>
			<h3>Last Component</h3>
			<AnotherComponentMore />
		</div>
	)
}

function AnotherComponentMore() {
	const { selectedUser } = useContext(UserContext);

	return (
		<div>
			<h3>AnotherComponentMore</h3>
			<span>{selectedUser ? selectedUser.email : 'No user selected'}</span>
		</div>
	)
}

export function ThisComponentIsOutOfTheContext() {
	// if you uncomment the next line, the entire App crashes
	// const { selectedUser } = useContext(UserContext);

	return (
		<div>
			<h4 className="m-4">ThisComponentIsOutOfTheContext Component does not belong to the Context</h4>
			{/* <span>{selectedUser ? selectedUser.email : 'No user selected'}</span> */}
		</div>
	)
}