import express from 'express';
import { dbUusers } from '../BBDD/database.js';
const router = express.Router();

router.get('/profileInfo/:name', (req, res, next) => {
	const name = req.params.name;

	const sessionId = req.session.id;
	const originalMaxAge = req.session.cookie.originalMaxAge;
	const maxAge = req.session.cookie.maxAge;

	const profile = dbUusers.find(user => {
		return user.user === name
	})

	if(!profile)
		return res.status(200).json({ message: 'user not found!' })

	res.send({ sessionId, originalMaxAge, maxAge, name, profile });
})

router.get('/', (req, res, next) => {
	console.log('router.get(/,');
	res.send('...');
	// const { sessionId } = req.cookies;
	// res.send({ sessionId });
})


export { router as apiRouter };
