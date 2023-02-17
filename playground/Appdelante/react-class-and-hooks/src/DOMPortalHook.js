import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom'
import './styles/style1.css';

const styles = {
		main: {
			backgroundColor: '#f1f1f1',
			color: 'darkgray'
		},
		inputText: {
			padding: '10px'
		}
	};

const DomPortalHook = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		setData('This content goes in the normal Component flow');

		return () => { /* <--- this return is excecuted when the Component is disposed, similar to "componentWillUnmount()" */
			console.log('Good bye, useEffect');
		}
	}, []);

	return (
		<div className="dom-portal-hook">
			<p style={styles.main}>This style comes from styles.main</p>
			<h3>{data}</h3>
			<hr></hr>
			{createPortal(<p>Hi, I'm from another Portal</p>, document.getElementById('portal'))} // document.querySelector, document.body, ...
		</div>
	)
}

export default DomPortalHook;
