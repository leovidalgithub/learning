import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

export default (props) => {

	// const { selectedUser } = useContext(UserContext);

	return (
		<div>
			<h3>Last Component</h3>
			<span>{props.selectedUser ? props.selectedUser.email : 'NO'}</span>
		</div>
	)
}