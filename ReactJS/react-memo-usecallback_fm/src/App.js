import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CounterComponent from './components/CounterComponent';
import './style.css';
import { useState, useCallback, useEffect } from 'react';

function App() {

	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [value, setValue] = useState('*');

	const handleClick1 = useCallback(() => {
		setCount1(count1 + 1);
	}, [count1]);

	const handleClick2 = useCallback(() => {
		// setCount2(count2 + 1);
		setCount2(prevCount => prevCount + 1);
	}, []); // <--- same behavior without using dependency but using the previous count (prevCount) value instead

	const handleClick3 = useCallback(() => {
		setCount3(count3 + 1);
	}, [count3]);

	useEffect(() => {
		setTimeout(() => {
			setCount3(count3 + 5);
			setValue('**');
		}, 2000);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<HeaderComponent value={value} />
				<div className='container'>
					<CounterComponent number={1} count={count1} handleClick={handleClick1} />
					<CounterComponent number={2} count={count2} handleClick={handleClick2}/>
					<CounterComponent number={3} count={count3} handleClick={handleClick3}/>
				</div>
			</header>
		</div>
	);
}

export default App;
