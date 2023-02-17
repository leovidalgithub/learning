import React, { useState, useEffect } from 'react';

export const SegundoComponente = () => {
	const [libros, setLibros] = useState(['Harry Potter', 'Juegos de Tronos', 'Clean Code', 'El Gen Egoísta']);

	return (
		<div className='segundo-componente'>
			<h3>Listado de Libros</h3>

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
		<h4>This is AnotherComponent in SegundoComponente.js file</h4>
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