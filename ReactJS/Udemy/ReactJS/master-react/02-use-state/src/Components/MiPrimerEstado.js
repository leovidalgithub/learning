import React, { useState, useEffect } from 'react';

export const MiPrimerEstado = () => {
	const [nombre, setNombre] = useState('');

	const handleInputChange = e => {
		setNombre(e.target.value);
	};

	return (
		<div>
			<h4>MiPrimerEstado Component</h4>
			<form>
				Nombre: {nombre}&nbsp;&nbsp;
				<input
					type="text"
					onChange={handleInputChange}
					placeholder="Write Leonardo and you will see!"
				/>
			</form>
			{nombre == 'Leonardo' &&
				<div>
					<ConditionalComponent />
				</div>
			}
		</div>
	)
}

const ConditionalComponent = () => {
	useEffect(() => {
		alert('Hi! Component mounted');

		return () => {
			alert('Component unmounted, bye');
		}
	}, []);

	return (
		<div>
			<h4>ConditionalComponent is here!</h4>
		</div>
	)
};