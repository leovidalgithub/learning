import express from 'express';
const router = express.Router();
import { nanoid } from 'nanoid';
import { userAuth } from '../helpers/userAuth.js';

router.post('/login', (req, res, next) => {
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
		res.status(400).json({ exception: error.message})
	}
})

// logout and session destroy
router.get('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		console.log('session destroyed!');
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

export { router as userRouter };
