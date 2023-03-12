import express from 'express';
const router = express.Router();
import { nanoid } from 'nanoid';
import { userAuth } from './helpers/userAuth.js';

router.post('/', (req, res, next) => {
	try {
		const { user, password } = req.body;
		const userData = userAuth(user, password);

		if(!userData)
			res.status(401).send({message: '401 Unauthorized'})

		const sessionId = nanoid();
		delete userData.password;

		res.cookie('sessionId', sessionId, {
			httpOnly: false,
		})

		res.json({ sessionId, userData })

	} catch (error) {
		console.log('esto se jodio', error);
		res.status(400).json({ exception: error})
	}
})

router.get('/userInfo/:id', (req, res, next) => {
	const id = req.params.id;
	const { sessionId } = req.cookies;

	console.log(id, sessionId);
	res.send({ id, sessionId });
})

export { router };
