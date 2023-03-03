import React, { useState } from "react";

const FormularioComponent = () => {
	const [usuario, setUsuario] = useState({});

	const conseguirDatosForlumario = e => {
		e.preventDefault();

		let newUsuario = {
			nombre: e.target.nombre.value,
			apellido: e.target.apellido.value,
			genero: e.target.genero.value,
			bio: e.target.bio.value
		}
		setUsuario(newUsuario);
	}

	const cambiarDatos = e => {
		let name = e.target.name;
		/* A shallow clone is a clone that has its primitive properties cloned but his REFERENCE properties STILL reference the original */
		// let usuario_para_modificar = Object.assign({}, usuario);

		setUsuario(prevUsuario => ({
				...prevUsuario,
				[name]: e.target.value
			})
		);
	}

console.debug('Formulario 1 render!');

	return (
		<div className="form">
			<h1>Formulario</h1>
			{usuario.bio && usuario.bio.length >= 1 && (
				<div className="info-usuario label label-gray">
					{usuario.nombre} {usuario.apellido} es {usuario.genero} bio: {usuario.bio}
				</div>
				)
			}
			<form onSubmit={conseguirDatosForlumario}>
				<input type="text" name="nombre" placeholder="Nombre" onChange={cambiarDatos}/>
				<input type="text" name="apellido" placeholder="Apellido" onChange={cambiarDatos} />
				<select name="genero" onChange={cambiarDatos}>
					<option value="hombre">Hombre</option>
					<option value="mujer">Mujer</option>
				</select>
				<textarea name="bio" placeholder="Biografía" onChange={cambiarDatos}></textarea>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	)
}

export default React.memo(FormularioComponent);