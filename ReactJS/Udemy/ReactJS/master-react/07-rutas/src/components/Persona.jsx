import { useParams } from 'react-router-dom';

export const Persona = () => {

	const { nombre = 'Ian', apellido = 'Mosley' } = useParams();
	// const parametros = useParams();

	return (
		<div>
			<h1>Persona</h1>
			<p className="persona">Nombre de Persona <span>{nombre} {apellido}</span></p>
		</div>
	)
}