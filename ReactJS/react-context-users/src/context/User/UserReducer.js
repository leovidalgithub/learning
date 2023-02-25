import { GET_USERS, GET_PROFILE, REMOVE_PROFILE } from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_USERS:
			return {
				...state,
				users: payload,
			};
		case GET_PROFILE:
			return {
				...state,
				selectedUser: payload,
			};
		case REMOVE_PROFILE:
			return {
				...state,
				users: state.users.filter((profile, index) =>
					profile.id != payload
				),
				selectedUser: state.selectedUser.id == payload ? {} : state.selectedUser
			};
		default:
			return state;
	}
};