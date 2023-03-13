import { dbUusers } from '../BBDD/database.js';

export const userAuth = (_user, _password) => {
	if(!_user || !_password)
		throw new UserAuthException('user or password is missing!');
		// throw 'user or password is missing!';
		// throw new Error('user or password is missing!');

	const userData = dbUusers.find(user => {
		return user.user === _user && user.password === _password
	})

	const userDataDeepCopy = JSON.parse(JSON.stringify(userData));
	return userDataDeepCopy;
}

function UserAuthException(message) {
	this.message = message;
	this.name = 'UserAuthException'
}

// auth middleware
export const sessionChecker = (req, res, next) => {
	console.log('Session Checker');
	console.log(req.session.id);
	// console.log(req.session);
	console.log(req.session.cookie.originalMaxAge);
	console.log(req.session.cookie.maxAge);

	if (req.session.profile) {
		console.log('Found User Session');
		next();
	} else {
		console.log('No User Session Found');
		res.redirect('/login');
	}
};