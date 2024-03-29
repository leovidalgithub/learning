import React, { useState, useEffect, useRef, useContext } from "react";
import { useAppContext } from '../App';

export const FormularioValidation = () => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const element = useRef(null);
	const data = useAppContext();

	const errorMessage = () => {
		if (!user.includes('@'))
			return 'user must contain @'
		if (pass.length < 6)
			return 'password must be at least 6 character in length!'
	}

	useEffect(() => {
		element.current.focus();
		// document.querySelectorAll('input[type="text"]')[1].style.background = 'crimson';
		// document.querySelectorAll('input[type="text"]')[1].focus();
	}, []);

console.debug('Formulario 2 render!');

	return (
		<div>
			<h3>Formulario Validation</h3>
			<p style={{color: 'red'}} >{ data }</p>
			<div className="input input__user">
				<label>
					User&nbsp;
					<input type="text" placeholder="User" onChange={e => setUser(e.target.value)} ref={element} />
				</label>
			</div>
			<div className="input input__pass">
				<label>
					Password&nbsp;
					<input type="text" placeholder="Password" onChange={e => setPass(e.target.value)} />
				</label>
			</div>
			<hr />
			<h5>Errors</h5>
			<p className="errors-message">{errorMessage()}</p>
		</div>
	)
}