const setCache = function(req, res, next) {
	if (req.method == 'GET') {
		res.set('Cache-control', 'public, max-age=300') // 300 seconds
	} else {
		res.set('Cache-control', `no-store`)
	}

	next();
}

module.exports = setCache;