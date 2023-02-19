import React, { useState } from 'react';

export const MiPrimerEstado = () => {
	const [nombre, setNombre] = useState('Leonardo');

	const handleInputChange = e => {
		setNombre(e.target.value);
	};

	return (
		<div>
			<h4>MiPrimerEstado Component</h4>
			<p>
				{nombre}&nbsp;&nbsp;
				<input
					type="text"
					onChange={handleInputChange}
				/>
			</p>
		</div>
	)
}