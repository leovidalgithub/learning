import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom'
import '../styles/style1.css';

const styles = {
		main: {
			backgroundColor: '#f1f1f1',
			color: '#7e7b7b'
		},
		inputText: {
			padding: '10px'
		}
	};

const DomPortalHook = () => {
	const [data, setData] = useState(null);
	const [domReady, setDomReady] = useState(false); // <-- since UseEffect runs after render, we use it to make sure the page is full loaded

	useEffect(() => {
		setData('This content goes in the normal Component flow');
		setDomReady(true);

		return () => { /* <--- this return is excecuted when the Component is disposed, similar to "componentWillUnmount()" */
			console.log('Good bye, useEffect');
		}
	}, []);

	return (
		<div className="dom-portal-hook">
			<p style={styles.main}>This style comes from styles.main</p>
			<h3>{data}</h3>
			<hr></hr>
			{domReady &&
				(createPortal(<p>Hi, I'm from another Portal</p>, document.getElementById('portal')))
			}
			{domReady &&
				(createPortal(<p>Hi, I'm also from another Portal</p>, document.getElementById('portal2')))
			}
		</div>
	)
}

export default DomPortalHook;
