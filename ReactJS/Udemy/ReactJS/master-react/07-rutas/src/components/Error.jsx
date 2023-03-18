import { Link } from 'react-router-dom';

export const Error = () => {
	return (
		<div>
			<h1>Inicio 404</h1>
			<p>Página no existe!</p>
			<Link to="/inicio" className="activado">Volver a Inicio</Link>
		</div>
	)
}