import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente'; // MiComponent was exported using export DEFAULT, so it does need using {}
import { SegundoComponente, AnotherComponent, onFocusExample as OnFocusExample } from './SegundoComponente';
import TercerComponente from './TercerComponente';
import { EventosComponentes, MyClass } from './EventosComponentes';
import PassingPropsMethod from './PassingPropsMethod';
/*
when Import, the use of {} is meant only for Components that have been exported without using Defaul keyword
*/

function App() {
	const ficha_medica = {
		altura: "187 cm",
		estado: "Bueno",
		alergias: "Ninguna"
	};

	const methodSentToChild = (text) => {
		console.log(text);
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className='componentes'>
					<PassingPropsMethod buttonLabel="Click me" methodSentToChild={methodSentToChild} />
					{/* <PassingPropsMethod propsMethod="{myMethod}" /> */}
					<hr/>
					<h5>TercerComponente starts here</h5>
					<TercerComponente
						nombre="Leonardo"
						apellidos="Vidal"
						grupo="R21L"
						ficha={ficha_medica}
					/>
					<hr/>
					<AnotherComponent />
					<hr/>
					<SegundoComponente />
					<hr/>
					<MiComponente />
					<hr/>
					<h3>
						<OnFocusExample />
					</h3>
					<hr/>
					<EventosComponentes />
					<hr/>
					<MyClass name="Leo" />
				</div>
			</header>
		</div>
	);
}

export default App;
