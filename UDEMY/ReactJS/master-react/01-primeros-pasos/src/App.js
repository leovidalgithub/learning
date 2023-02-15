import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente'; // MiComponent was exported using export DEFAULT, so it does need using {}
import { SegundoComponente, AnotherComponent} from './SegundoComponente';
import TercerComponente from './TercerComponente';
/*
when Import, the use of {} is meant only for Components that have been exported without using Defaul keyword
*/

function App() {

	const ficha_medica = {
		alture: "187 cm",
		estado: "Bueno",
		alergias: "Ninguna"
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload
				</p>
				<div className='componentes'>
					<TercerComponente
						nombre="Leonardo"
						apellidos="Vidal"
						grupo="R21L"
						ficha ={ficha_medica}
					/>
					<hr/>
					<AnotherComponent />
					<hr/>
					<SegundoComponente />
					<hr/>
					<MiComponente />
				</div>
			</header>
		</div>
	);
}

export default App;
