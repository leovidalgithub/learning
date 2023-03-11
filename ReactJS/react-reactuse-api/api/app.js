require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const app = express();

app.set('port', process.env.PORT || 8080);

const corsOptions = {
	'origin': '*',
	'methods': ['GET', 'POST'],
	'credentials': true,
	'preflightContinue': true,
	'optionsSuccessStatus': 200
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(myconnection(mysql, {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE
}, 'single'));

app.use(require('./cache'));
app.use('/api', require('./routes/routes'));

app.listen(app.get('port'), () => {
	console.debug('Listening at port ' + app.get('port'));
})
