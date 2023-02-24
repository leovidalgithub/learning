import React, { useEffect } from "react";
// import UserContext from '../context/User/UserContext';
import { useUserContext } from "../../context/User/UserContextProvider";

const UserList = () => {

	// const { users, getUsers, getProfile } =	useContext(UserContext);
	const { users, getUsers, getProfile } =	useUserContext();

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="list-group h-100">
			{
				users.map(user => (
					<a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" key={user.id} href="#!" onClick={() => getProfile(user.id)}>
						<img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" />
						<p>
							{`${user.first_name} ${user.last_name}`}
						</p>
					</a>
				))
			}
		</div>
	)
}

export default UserList;