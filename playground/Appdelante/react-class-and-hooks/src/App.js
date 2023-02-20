import logo from './logo.svg';
import './App.css';
import CoordenatesClass from './coordenates-class';
import CoordenatesHooks1 from './coordenates-hooks-v1';
import CoordenatesHooks2 from './coordenates-hooks-v2';
import GetDataHooks from './GetDataHooks';
import HidingComponentsParent from './HidingComponentsParent';
import WorkingWithArrays from './WorkingWithArrays';
import DomPortalHook from './DOMPortalHook';
import UsingCallback from './UseCallbackComponent';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<UsingCallback />
				<DomPortalHook />
				<HidingComponentsParent />
				<h4>Coordenates using React Class Component</h4>
				<CoordenatesClass>
					<h3 style={{color: "#333", background: "lightgray"}}>I'm text in between Component open/close tags</h3>
				</CoordenatesClass>
				<h4>Coordenates using React Hooks version 1</h4>
				<CoordenatesHooks1 name="Leonardo" />
				<h4>Coordenates using React Hooks version 2</h4>
				<CoordenatesHooks2 />
				<GetDataHooks />
				<WorkingWithArrays />
			</header>
		</div>
	);
}

export default App;
