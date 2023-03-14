import express from 'express';
import session from 'express-session';
import { apiRouter } from './routes/apiRoute.js';
import { userRouter } from './routes/userRoute.js';
import middlewares from './middlewares/index.js';
const app = express();

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(express.text());
app.use(middlewares.init.setCache);
app.use(session(middlewares.init.session));

// routes
app.use('/api', [middlewares.sessionChecker], apiRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
	console.log('Listening on port ' + app.get('port'));
})

//https://github.com/expressjs/session
//https://jonathan-holloway.medium.com/node-and-express-session-a23eb36a052
