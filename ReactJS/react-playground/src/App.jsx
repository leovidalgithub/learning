import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EnvironmentVariables from './components/EnvironmentVariables';
import DangerouslySetInnerHTMLAndMore from './components/DangerouslySetInnerHTMLAndMore';

function App() {
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<EnvironmentVariables />
			<DangerouslySetInnerHTMLAndMore />
		</div>
	)
}

export default App
