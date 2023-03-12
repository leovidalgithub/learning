import express from 'express';
const app = express();
import { router } from './route.js';
import cookieParser from 'cookie-parser';
import { setCache } from './cache.js';

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.text());
app.use(cookieParser());
app.use(setCache);

app.use('/login', router);


app.get('/', (req, res, next) => {
	res.send('epa');
})







app.listen(app.get('port'), () => {
	console.log('Listening on port ' + app.get('port'));
})