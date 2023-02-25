import React, { useEffect } from "react";
// import UserContext from '../context/User/UserContext';
import { useUserContext } from "../../context/User/UserContextProvider";

const UserList = () => {

	// const { users, getUsers, getProfile } =	useContext(UserContext);
	const { users, getUsers, getProfile, removeProfile } =	useUserContext();

	useEffect(() => {
		setTimeout(() => {
			getUsers();
		}, 870);
	}, []);

	return (
		<div className="list-group h-100">
			{ users &&
				users.map(user => (
					<a
						key={user.id}
						className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center"
						href="#!"
						onClick={() => getProfile(user.id)}
					>
						<img
							src={user.avatar}
							className="img-fluid mr-4 rounded-circle"
							width="80"
						/>
						<p>
							{`${user.first_name} ${user.last_name}`}
						</p>
						<button
							key={user.id}
							className="btn btn-primary"
							value={user.id}
							type="button"
							onClick={removeProfile}
						>
						{/* 'not-events' class is preventing elements from trigger events by their own,
							but instead trigger the event on its parent (bubble) */}
							<span className="not-events">
								Delete&nbsp;&nbsp;
							</span>
							<i className="not-events fa-solid fa-trash"></i>
						</button>
					</a>
				))
			}
		</div>
	)
}

export default UserList;