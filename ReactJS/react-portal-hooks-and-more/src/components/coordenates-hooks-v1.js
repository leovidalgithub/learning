import { useState, useEffect } from "react";

function CoordenatesHook() {
	const [coordenates, setCoordenates] = useState({
		latitud: null,
		longitud: null
	});

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCounter(counter + 1);
		}, 2000)
	}, [counter]);

	let geoId;

	useEffect(() => {
		geoId = window.navigator.geolocation.watchPosition(position => {
			setCoordenates({
				latitud: position.coords.latitude,
				longitud: position.coords.longitude
			})
		});

		return () => { /* <--- this return is excecuted when the Component is disposed, similar to "componentWillUnmount()" */
			navigator.geolocation.clearWatch(geoId);
		}
	}, [])	/* <---- this empty array as second parameter tells useEffect to be excecuted only once unless a state varialbe is indicated */

	return { coordenates, data: counter };
}

export default function CoordenatesHooks1(props) {
	const { coordenates, data } = CoordenatesHook();

	return (
		<div className="coordenates-hooks">
			<h4>CoordenatesHooks1</h4>
			<h5 style={{color: 'lightcoral'}}>data state coming from CoordenatesHook {data}</h5>
			{coordenates.latitud == null ?
				(
					<div>Cargando...</div>
				) :
				(
					<div style={{color: 'beige'}}>
						<h4>Name: {props.name}</h4>
						<h4>Latitud: {coordenates.latitud}</h4>
						<h4>Longitud: {coordenates.longitud}</h4>
					</div>
				)}
		</div>
	)
}


