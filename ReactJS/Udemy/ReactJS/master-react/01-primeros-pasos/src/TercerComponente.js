import React from "react";
import PropTypes from 'prop-types';

/* object destructuring
	instead of receiving only 1 parameter 'props', I can also destructure 'props' object
	const TercerComponente = function(props) { <--- using 'props'
*/

const TercerComponente = ({ // <--- 'props' destructured
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
				<li>Altura: {ficha.altura}</li>
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