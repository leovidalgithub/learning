import React, { createContext, useReducer, useContext } from "react";
import UserReducer from './UserReducer';
// import UserContext from './UserContext';
import axios from 'axios';

// this object will be used by this component (UserContextProvider) using its method Provider as <UserContext.Provider></UserContext.Provider>' tags
const UserContext = createContext();

// this export function will be used by all descendents elements of the parent component (ParentComponent.js)
export function useUserContext() {
	return useContext(UserContext);
}

const UserContextProvider = (props) => {

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


export default UserContextProvider;

// in order to return a Context, you must return a 'UserContext' instance with its method called 'Provider'
// const UserContext = createContext();
