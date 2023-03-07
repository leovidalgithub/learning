import { useState } from 'react';

const CrearComponent = () => {

	const tituloComponente = 'Añadir película';
	const [pelisState, setPelisState] = useState([]);
	// const {title, description} = peliState;

	const conseguirDatosForm = e => {
		e.preventDefault();

		let peli = {
			id: new Date().getTime(),
			title: e.target.title.value,
			description: e.target.description.value
		}

		GuardarNuevaPeli(peli);
	}

	const GuardarNuevaPeli = peli => {
		const pelisTMP = pelisState.slice();
		pelisTMP.push(peli);
		setPelisState(pelisTMP);

		sessionStorage.setItem('pelis', JSON.stringify(pelisTMP));
	}

	return (
		<>
			<div className="add">
				<h3 className="title">{tituloComponente}</h3>

				<strong>{pelisState.length ? 'Has creado la peli: ' + pelisState[pelisState.length - 1].title : ''}</strong>

				<form onSubmit={conseguirDatosForm}>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Título" />

					<textarea
						id="description"
						name="description"
						placeholder="Descripción"></textarea>

					<input
						type="submit"
						id="save"
						value="Guardar" />

				</form>
			</div>
		</>
	)
}

export default CrearComponent;