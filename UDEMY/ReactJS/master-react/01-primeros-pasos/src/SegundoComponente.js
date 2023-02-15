import React from 'react';

export const SegundoComponente = () => {

	const libros = ["Harry Potter", "Juegos de Tronos", "Clean Code"];

	return (
		<div className='segundo-componente'>
			<h1>Listado de Libros</h1>

			{libros.length > 0 ? /* JSX ternary*/
				(
					<ul>
						{
							libros.map((libro, index) => {
								return <li key={index}>{libro}</li>
							})
						}
					</ul>
				) : (
					<h3>No hay libros para mostrar</h3>
				)
			}
		</div>
	)
};

export const AnotherComponent = () => {
	return (
		<h3>This is AnotherComponent in SegundoComponente.js file</h3>
	)
}

export const onFocusExample = () => {
	return (
		<input
			onFocus={(e) => {
				console.log('Input focused! 😲');
			}}
			placeholder="onFocus is triggered when you click this input - check the console"
		/>
	)
}