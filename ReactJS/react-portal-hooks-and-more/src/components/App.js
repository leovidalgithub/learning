import logo from '../logo.svg';
import '../App.css';
import CoordenatesClass from './coordenates-class';
import CoordenatesHooks1 from './coordenates-hooks-v1';
import GetDataHooks from './GetDataHooks';
import HidingComponentsParent from './HidingComponentsParent';
import WorkingWithArrays from './WorkingWithArrays';
import DomPortalHook from './DOMPortalHook';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<WorkingWithArrays />
				<DomPortalHook />
				<HidingComponentsParent />
				<h4 className="coordenates-class">Coordenates using React Class Component</h4>
				<CoordenatesClass>
					<h3 style={{color: "#333", backgroundColor: "lightgray"}}>
						I'm text in between Component open/close tags
					</h3>
				</CoordenatesClass>
				<div id="portal2" className="portal-class"></div>
				<h4 className="coordenates-hooks">Coordenates using React Hooks</h4>
				<CoordenatesHooks1 name="Leonardo" />
				<GetDataHooks />
			</header>
		</div>
	);
}

export default App;
