import logo from '../logo.svg';
import '../App.css';
import EnvironmentVariables from './EnvironmentVariables';
import DangerouslySetInnerHTMLAndMore from './DangerouslySetInnerHTMLAndMore';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<EnvironmentVariables />
				<DangerouslySetInnerHTMLAndMore />
			</header>
		</div>
	);
}

export default App;
