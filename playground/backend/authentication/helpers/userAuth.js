import { dbUusers } from '../BBDD/database.js';

export const userAuth = (_user, _password) => {
	if(!_user || !_password)
		throw new UserAuthException('user or password is missing!');
		// throw 'user or password is missing!';
		// throw new Error('user or password is missing!');

	return dbUusers.find(user => {
		return user.user === _user && user.password === _password
	})
}

function UserAuthException(message) {
	this.message = message;
	this.name = 'UserAuthException'
}