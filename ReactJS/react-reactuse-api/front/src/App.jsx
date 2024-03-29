import reactLogo from './assets/react.svg'
import './App.css'
import './App.scss'
import SearchComponent from './components/SearchComponent';

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
			<SearchComponent />
		</div>
	)
}

export default App
