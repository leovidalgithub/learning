import React from "react";

// Functional Component
const MiComponente = () => {

	let usuario = {
		nombre: "Leonardo",
		apellidos: "Vidal",
		web: "leovidal.es"
	}

	return (
		<div>
			<p>Este es mi primer componente</p>
			<h3>Datos del usuario</h3>
			<ul>
				<li>Usuario: {JSON.stringify(usuario)}</li>
				<li>Nombre: <strong>{usuario.nombre}</strong></li>
				<li>Web: <strong>{usuario.web}</strong></li>
			</ul>
		</div>
	)
};

// Export
export default MiComponente;