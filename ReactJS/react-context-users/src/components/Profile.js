import React, { useContext } from "react";
import UserContext from '../context/User/UserContext';
import { LastComponent } from "./LastComponent";

const Profile = () => {

	const { selectedUser } = useContext(UserContext);

	return (
		<div>
			<h3>Profile</h3>
			<span>
				{selectedUser ?
					(
						<div className="card card-body text-center">
							<img className="card-imb-top round-circle m-auto img-fluid" src={selectedUser.avatar} alt="" style={{width: 180}} />
							<h2>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h2>
							<h3>email: {selectedUser.email}</h3>
						</div>
					) :
					'No user selected!'}
			</span>
			<LastComponent />
		</div>
	)
}

export default Profile;