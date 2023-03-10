const router = require('express').Router();

router.get('/search', (req, res, next) => {
	const text = req.query.text;
	console.log('searching ', text);

	req.getConnection((err, conn) => {
		if (err)
			res.status(401).json({ msg: 'connection error', err: err })

		conn.query(`SELECT * FROM resourcesMedia WHERE mediaTitle LIKE '%${text}%'`, (err, results) => {
			if (err) {
				res.statusCode = 301;
				res.json({msg: 'error', msg: 'err'})
			}
			setTimeout(() => {
				res.status(200).json(results)
			}, Math.round(Math.random() * (2000 - 500) + 500));
		})
	})
})

module.exports = router;