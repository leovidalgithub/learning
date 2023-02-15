// Import react modules / dependencies
import React from "react";

// Component function
const MiComponente = () => {

	let usuario = {
		nombre: "Víctor",
		apellidos: "Robles",
		web: "victorroblesweb.es"
	}

	return (
		<div>
			<p>Este es mi primer componente</p>
			<h3>Ddatos del usuario</h3>
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