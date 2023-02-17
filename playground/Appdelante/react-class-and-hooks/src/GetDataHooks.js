import React, { useState, useEffect } from "react";

function GetDataHook(url) {
	const [data, setData] = useState({
		data: null,
		count: null
	});

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setData({
					data: data.results,
					count: data.count
				})
			})
	}, [])	/* <---- this empty array as second parameter tells useEffect to be excecuted only once unless a state variable is indicated */

	return data;
}

const AnotherHook = () => {
	const [notes, SetNotes] = useState(null);
	return <p>Another simple Hook doing nothing</p>
}


export default function GetDataHooks() {
	const [myOwnState, SetMyOwnState] = useState('My stuffs goes here');
	const {data, count} = GetDataHook('https://pokeapi.co/api/v2/pokemon/');

	return count == null ?
		(
			<div>Retrieving data...</div>
		) :
		(
			<div>
				<hr></hr>
				<AnotherHook />
				<p>count: {count}</p>
				<p>name: {data[2].name}</p>
				<p>JSON {JSON.stringify(data[0])}</p>
			</div>
		)
}