import React from "react";
import PropTypes from 'prop-types';

/* object destructuring
	instead of receiving props, I destructure props object into --> {nombre, apellidos, grupo, ficha}
*/

const TercerComponente = ({ // <--- props destructured
														nombre,
														apellidos,
														grupo = "R23H", // <-- default value
														ficha,
														}) => {

	return (
		<div>
			<h3>Comunicación entre componentes</h3>
			<ul>
				<li>Nombre: {nombre}</li>
				<li>Apellidos: {apellidos}</li>
				<li>Grupo: {grupo}</li>
				<li>Alergias: {ficha.alergias}</li>
			</ul>
		</div>
	)
}

/* type checking and default values
https://es.reactjs.org/docs/typechecking-with-proptypes.html
*/
TercerComponente.propTypes = {
	nombre: PropTypes.string.isRequired,
	apellidos: PropTypes.string,
	ficha: PropTypes.object,
}
TercerComponente.defaultProps = {
	nombre: "Adelto" // default value
}

export default TercerComponente;