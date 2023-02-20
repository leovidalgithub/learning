/*
https://pixabay.com/
https://www.npmjs.com/package/fetch-base64
https://www.youtube.com/watch?v=y1ZqhQySFKw
*/
import express from 'express';
import pug from 'pug';
import fetch from 'fetch-base64';

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', async function(req, res) {

	let images = await conseguirDataParaPagina();
	res.render('index', { title: 'Hey Images', images});
});

async function conseguirDataParaPagina() {
	let pics = [
		'2014/02/27/16/10/flowers-276014_960_720.jpg',
		'2013/07/18/20/26/sea-164989_960_720.jpg',
		'2013/08/20/15/47/poppies-174276_960_720.jpg',
		'2015/10/30/20/13/sunrise-1014712_960_720.jpg'
	];

	let responses = [];
	for (let pic of pics) {
		let response = await fetch.remote(`https://cdn.pixabay.com/photo/${pic}`);
		responses.push(response);
	}

	let images = [];
	for (let response of responses) {
		images.push(response[1]);
	};

	return images;
};

app.listen(3000, () => {
	console.log('Escuchado en puerto 3000')
});


// const doFetchRemote = fetch.remote('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg');
// doFetchRemote.then((data) => {
// 	console.log(`base64 image with mimeType: ${data[1]}`);
// }, (reason) => {
// 	console.log(`Fetch Failed: ${reason}`)
// });