import express from 'express';
const router = express.Router();
import { nanoid } from 'nanoid';
import { userAuth } from './helpers/userAuth.js';

router.get('/login', (req, res, next) => {
	console.log('login');
	try {
		const { user, password } = req.body;
		const profile = userAuth(user, password);
		if(!profile)
			return res.status(401).send({message: '401 Unauthorized'})

		const sessionId = nanoid();
		Reflect.deleteProperty(profile, 'password');

		req.session.profile = profile;
		res.json({ sessionId, profile });

	} catch (error) {
		res.status(400).json({ exception: error})
	}
})

// logout and sessiong destroy
router.get('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		console.log('Destroyed session')
	})
	res.send('...logout');
});

// using cookie sessionId
// router.post('/login', (req, res, next) => {
// 	try {
// 		const { user, password } = req.body;
// 		const userData = userAuth(user, password);

// 		if(!userData)
// 			return res.status(401).send({message: '401 Unauthorized'})

// 		const sessionId = nanoid();
// 		Reflect.deleteProperty(userData, 'password');

// 		res.cookie('sessionId', sessionId, {
// 			httpOnly: false,
// 			maxAge: 5000 // milliseconds from Date.now()
// 		});
// 		res.json({ sessionId, userData });

// 	} catch (error) {
// 		res.status(400).json({ exception: error})
// 	}
// })

router.get('/userInfo/:id', (req, res, next) => {
	const id = req.params.id;
	const { sessionId } = req.cookies;

	if(!sessionId)
		return res.status(400).json({ exception: 'unathorized' })

	res.send({ id, sessionId });
})

export { router };
