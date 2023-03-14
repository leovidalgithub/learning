const middlewares = {
	init: {
		session: {
			name: 'sessionName', // the name of the session id cookie
			secret: 'Your_Secret_Key',
			resave: false,
			saveUninitialized: true, // to make the session persist, otherwise it always create a new session
			cookie:
			{
				secure: false, // This will only work if you have https enabled. If this is set to ‘true’ during development then you need to ensure you have https enabled, otherwise a new session id will be generated each time
				maxAge: 600000 // This is the max-age of the cookie in ms
			}
		},
		setCache: function (req, res, next) {
			if (req.method === 'GET') {
				res.set('Cache-control', 'public, max-age=300') // 300 seconds
			} else {
				res.set('Cache-control', `no-store`)
			}
			next();
		}
	},
	sessionChecker: (req, res, next) => {
		console.log('Session Checker');
		// console.log('sessionId', req.cookies);
		console.log('req.session.id', req.session.id);
		// console.log(req.session);
		console.log('originalMaxAge', req.session.cookie.originalMaxAge);
		console.log('maxAge', req.session.cookie.maxAge);

		if (req.session.profile) {
			console.log('Profile: YES');
			next();
		} else {
			console.log('Profile: NO');
			// return res.status(401).send({ message: '401 Unauthorized..' })
			return res.sendStatus(403)
		}
	}
}

export default middlewares;