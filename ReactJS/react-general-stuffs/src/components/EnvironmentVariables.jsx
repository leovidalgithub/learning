import { useEffect } from "react";

const EnvironmentVariables = () => {
	useEffect(() => {
		console.debug('process.env', process.env);
	}, []);

	return (
		<>
			<h1>Environment Variables</h1>
			<ul>
				<li>
					process.env.REACT_APP_NOT_SECRET_CODE: <span>{process.env.REACT_APP_NOT_SECRET_CODE}</span>
				</li>
				<li>
					process.env.NODE_ENV: <span>{process.env.NODE_ENV}</span><br />
					<span className="tiny-note">(when you run npm start, it is always equal to 'development', when you run npm test it is always equal to 'test', and when you run npm run build to make a production bundle, it is always equal to 'production')</span>
				</li>
				<li>
					process.env.REACT_APP_MY_CUSTOM_APIKEY: <span>{process.env.REACT_APP_MY_CUSTOM_APIKEY}</span>
				</li>
				<li>
					process.env.REACT_APP_MY_APP_NAME: <span>{process.env.REACT_APP_MY_APP_NAME}</span>
				</li>
				<li>
					process.env.REACT_APP_PACKAGE_JSON_VARIABLE: <span>{process.env.REACT_APP_PACKAGE_JSON_VARIABLE}</span><br></br>
					<span className="tiny-note"><code>"start": "set REACT_APP_PACKAGE_JSON_VARIABLE=abcdefg && react-scripts start"</code></span>
				</li>
			</ul>
			<p>React custom Environment variables must start by <span>REACT_APP_</span></p>
			<p>You can also use <span>.env</span> file or set them in the package.json</p>
		</>
	)
}

export default EnvironmentVariables;