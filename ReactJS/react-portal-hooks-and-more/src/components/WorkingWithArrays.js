/*
https://beta.reactjs.org/learn/updating-arrays-in-state
*/
import { useState, useEffect } from "react";

let initializeBooks = [
	'Harry Potter', 'Juegos de Tronos', 'Clean Code', 'El Gen Egoísta'
];

export default function WorkingWithArrays() {
	const [booksArray, setBooksArray] = useState(initializeBooks);

	useEffect(() => {
		console.log('TMP Array before modify')
		booksArray.forEach(
			(book, index) => console.debug(`${index} --> ${book}`)
		);

		// IMPORTANT: to avoid mutate over 'booksArray', we make a shallow copy, do some changes and then set 'booksArray' using 'setBooksArray'
		let tempArray = booksArray.slice();

		// adding a new book
		tempArray.push('Danzas coloradas');

		// adding a first and a last books
		tempArray = [
			'First Book', ...tempArray, 'Last Book'
		];

		// removing 'Juegos de Tronos'
		tempArray = tempArray.filter(book =>
			book !== 'Juegos de Tronos'
		);

		console.log('TMP Array after modify')
		tempArray.forEach(book => {
			console.debug('-->', book)
		})

		setTimeout(() => {
			setBooksArray(tempArray);
			console.log('State Array remains the same until all functions and UseEffects have run, then render again because a state variable changed, and then whenever a useEffect runs again, at that point Books array will display the changes');
			booksArray.forEach(book => {
				console.debug('-->', book)
			})
		}, 4500);

	}, []);

	return (
		<div>
			<p>Working with Book Array. Check the console, please 😊</p>
			<p style={{fontSize: '14px'}}>{JSON.stringify(booksArray)}</p>
			<hr></hr>
		</div>
	)
}