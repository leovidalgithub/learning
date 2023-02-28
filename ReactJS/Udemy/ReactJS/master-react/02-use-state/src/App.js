import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './Components/MiPrimerEstado';
import { AjaxComponent } from './Components/AjaxComponent';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>UseState</h1>
				<MiPrimerEstado />
				<AjaxComponent />
			</header>
		</div>
	);
}

export default App;
