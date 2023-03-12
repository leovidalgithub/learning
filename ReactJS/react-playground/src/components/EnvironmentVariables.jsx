import { useEffect } from "react";

const EnvironmentVariables = () => {
	useEffect(() => {
		console.debug('import.meta.env', import.meta.env);
	}, []);

	return (
		<div className="env">
			<h3>Environment Variables</h3>
			<ul>
				<li>
					import.meta.env.VITE_NOT_SECRET_CODE: <span>{import.meta.env.VITE_NOT_SECRET_CODE}</span>
				</li>
				<li>import.meta.env.MODE: <span>{import.meta.env.MODE}</span></li>
				<li>import.meta.env.DEV: <span>true</span></li>
				<li>import.meta.env.PROD: <span>false</span></li>
				<li>import.meta.env.SSR: <span>false</span></li>
				<li>
					import.meta.env.VITE_MY_CUSTOM_APIKEY: <span>{import.meta.env.VITE_MY_CUSTOM_APIKEY}</span>
				</li>
				<li>
					import.meta.env.VITE_MY_APP_NAME: <span>{import.meta.env.VITE_MY_APP_NAME}</span>
				</li>
				<li>
					import.meta.env.VITE_PACKAGE_JSON_VARIABLE: <span>{import.meta.env.VITE_PACKAGE_JSON_VARIABLE}</span><br></br>
					<span className="tiny-note"><code>"start": "set VITE_PACKAGE_JSON_VARIABLE=abcdefg && vite"</code></span>
				</li>
			</ul>
			<p>Vite custom Environment variables must start by <span>VITE_</span></p>
			<a href="https://vitejs.dev/guide/env-and-mode.html" target="_blank">Vite: Env Variables and Modes</a>
		</div>
	)
}

export default EnvironmentVariables;