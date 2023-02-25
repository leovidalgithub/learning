import React, { createContext, useReducer, useContext } from "react";
import UserReducer from './UserReducer';
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
		selectedUser: {}
	}

	// const [state, setState] = useState(initialState); <--- if we would use 'useState' instead of 'useReducer'
	const [state, dispatch] = useReducer(UserReducer, initialState);

	// **** You could also initialize the 'useReducer' this way: *** (remember to import 'types')
	// const [state, dispatch] = useReducer((state, action) => {
	// 	const { payload, type } = action;
	// 	switch (type) {
	// 		case GET_USERS:
	// 			return {
	// 				...state,
	// 				users: payload,
	// 			};
	// 		case GET_PROFILE:
	// 			return {
	// 				...state,
	// 				selectedUser: payload,
	// 			};
	// 		default:
	// 			return state;
	// 	}
	// }, initialState);

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
		console.debug(res.data.data);
	}

	const removeProfile = e => {
		e.stopPropagation(); /* <--- stop bubbling (and load a profile)*/
		dispatch({
			payload: e.target.value,
			// payload: id,
			type: 'REMOVE_PROFILE'
		})
	};

	return (
		<UserContext.Provider
			value={{
				users: state.users,
				selectedUser: state.selectedUser,
				getUsers,
				getProfile,
				removeProfile
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider;

// in order to return a Context, you must return a 'UserContext' instance with its method called 'Provider'
// const UserContext = createContext();
