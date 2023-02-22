import React, { useReducer } from "react";
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {

	const initialState = {
		users: [],
		selectedUser: null
	}

	const [state, dispatch] = useReducer(UserReducer, initialState);
	// const [state, setState] = useState(initialState); <--- if we would use 'useState' instead of 'useReducer'

	const getUsers = async () => {
		const res = await axios.get('https://reqres.in/api/users')
		dispatch({
			type: 'GET_USERS',
			payload: res.data.data
		})
	}

	const getProfile = async (id) => {
		const res = await axios.get(`https://reqres.in/api/users/${id}`)
		dispatch({
			type: 'GET_PROFILE',
			payload: res.data.data
		})
	}

	return (
		<UserContext.Provider
			value={{
				users: state.users,
				selectedUser: state.selectedUser,
				getUsers,
				getProfile
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}


export default UserState;

// in order to return a Context instead of a simple Component, we need to use createContext