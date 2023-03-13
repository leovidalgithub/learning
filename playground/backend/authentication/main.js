import express from 'express';
const app = express();
import { router } from './route.js';
import cookieParser from 'cookie-parser';
import { setCache } from './cache.js';
import session from 'express-session';
import { sessionChecker } from './helpers/userAuth.js'

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.text());
app.use(setCache);
app.use(cookieParser());
app.use(session({
		name: 'sessionName', // the name of the session id cookie
		secret: 'Your_Secret_Key',
		resave: false,
		saveUninitialized: true, // to make the session persist, otherwise it always create a new session
		cookie:
			{
				secure: false, // This will only work if you have https enabled. If this is set to ‘true’ during development then you need to ensure you have https enabled, otherwise a new session id will be generated each time
				maxAge: 50000 // This is the max-age of the cookie in ms
			}
}));

app.all('/', sessionChecker);
app.use('/', router);

app.listen(app.get('port'), () => {
	console.log('Listening on port ' + app.get('port'));
})

//https://github.com/expressjs/session
//https://jonathan-holloway.medium.com/node-and-express-session-a23eb36a052
