/*
https://beta.reactjs.org/learn/updating-arrays-in-state
*/
import React, { useState, useEffect } from "react";

let initialCounters = [
	0, 1, 2, 3, 4
];

export default function WorkingWithArrays() {
	const [flag, setFlag] = useState(false);
	const [arrayExample1, setArrayExample1] = useState(initialCounters);
	const [booksArray, setBooksArray] = useState(['Harry Potter', 'Juegos de Tronos', 'Clean Code', 'El Gen Egoísta']);

		/* did you know that UseEffect must go before of return?... yes, of course I do
	*/
	useEffect(() => {
		console.log('original Books Array');
		booksArray.forEach(
			(book, index) => console.log(`${index} --> ${book}`)
		);

		// IMPORTANT: to avoid mutate over 'booksArray', we make a shallow copy, do some changes and then set 'booksArray' using 'setBooksArray'
		let tempArray = booksArray.slice();

		// adding a new book
		tempArray.push('Danzas coloradas');

		// adding first and last books
		tempArray = [
			'First book', ...tempArray, 'Last Book'
		];

		// removing 'Juegos de Tronos'
		tempArray = tempArray.filter(book =>
			book !== 'Juegos de Tronos'
		);

		// setting 'booksArray'
		setBooksArray(tempArray);

		console.log('after some modification...', tempArray);
	}, []);

	/*
'arrayExample1' starts here
*/
	useEffect(() => {
			// console.log('arrayExample1 before modify', arrayExample1);

			const tempExample1 = arrayExample1.map((number, index) => {
				if (index === 2)
					return number + 11;
				else
					return number;
			});

			setArrayExample1(tempExample1);
			console.log(tempExample1);
			console.log(arrayExample1);
			// console.log('arrayExample1 after modify', arrayExample1);

	}, []);

	return (
		<p>Working with Arrays and Objects. Check the console, please 😊</p>
	)
}