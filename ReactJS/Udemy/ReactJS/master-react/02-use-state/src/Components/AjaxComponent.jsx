import React, { useState, useEffect } from "react";

export const AjaxComponent = () => {

	const [usuarios, setUsuarios] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [errores, setErrores] = useState('');

	const getUsuariosEstaticos = () => {
		setUsuarios([
			{
				"id": 1,
				"email": "michael.lawson@reqres.in",
				"first_name": "Michael",
				"last_name": "Lawson",
				"avatar": "https://reqres.in/img/faces/7-image.jpg"
			},
			{
				"id": 2,
				"email": "lindsay.ferguson@reqres.in",
				"first_name": "Lindsay",
				"last_name": "Ferguson",
				"avatar": "https://reqres.in/img/faces/8-image.jpg"
			},
			{
				"id": 3,
				"email": "tobias.funke@reqres.in",
				"first_name": "Tobias",
				"last_name": "Funke",
				"avatar": "https://reqres.in/img/faces/9-image.jpg"
			}
		])
	}

	const getUsuariosAjaxPromise = () => {
		fetch('https://reqres.in/api/users?page=2')
			.then(result => result.json())
			.then(data => {
				setUsuarios(data.data);
				setCargando(false);
			})
			.catch(e => console.debug(e));
		}

	const getUsuariosAjaxAsync = () => {
		setTimeout(async () => {
			try {
				// let results = await fetch('https://reqres.in/api/users?page=1');
				let results = await fetch('https://reqresxxx.in/api/users?page=1');
				let {data} = await results.json();
				setUsuarios(data);
				setCargando(false);
			} catch (error) {
				console.debug('error', error);
				setErrores(error.message);
			}
		}, 2000);
	}

	useEffect(() => {
		// getUsuariosEstaticos();
		// getUsuariosAjaxPromise();
		getUsuariosAjaxAsync();
	}, []);

	if (errores !== '') {
		return (
			<div className="errores">
				{errores}
			</div>
		)
	}

	if (cargando) {
		return (
			<div className="cargando">
				Cargando datos...
			</div>
		)
	}

	return (
		<div className="user-list">
			<h2>Listado de usuarios vía Ajax</h2>
			<ol>
				{usuarios.map(usuario => {
					return (
						<li key={usuario.id}>
							<img src={usuario.avatar} width="35" />&nbsp;&nbsp;
							{usuario.first_name} {usuario.last_name}
						</li>
						)
				})}
			</ol>
		</div>
	)
}