import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Contacto = () => {

	const navigateTo = useNavigate();
	const nombreInput = useRef(null);

	useEffect(() => {
		nombreInput.current.focus();
		// document.querySelector('#this-input').focus();
	}, []);

	const handleSubmit = e => {
		const nombre = e.target.nombre.value;
		const apellido = e.target.apellido.value;

		if (!nombre || !apellido) {
			navigateTo('/inicio')
		} else {
			navigateTo(`/persona/${nombre}/${apellido}`);
		}
	}

	return (
		<div>
			<h1>Contacto</h1>
			<p>Página de Contacto</p>
			<form onSubmit={handleSubmit} autoComplete="off">
				<input type="text" name="nombre" ref={nombreInput} /><br/>
				<input type="text" name="apellido" /><br />
				<input type="submit" name="enviar" value="Enviar" />
			</form>
		</div>
	)
}