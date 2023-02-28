import logo from './logo.svg';
import './App.css';
import PressButtons from './components/PressButtons';
import Counter from './components/Counter';
import AutoFocus from './components/AutoFocus';
import PreviousMessage from './components/PreviousMessage';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<PressButtons />
				<Counter />
				<AutoFocus />
				<PreviousMessage />
			</header>
		</div>
	);
}

export default App;
