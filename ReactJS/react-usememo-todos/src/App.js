import logo from './logo.svg';
import './App.css';
import { createTodos } from './Utils';
import { useState } from 'react';
import TodoList from './TodoList';

const todos = createTodos();

function App() {

	const [tab, setTab] = useState('all');
	const [isDark, setIsDark] = useState(false);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className='controls'>
					<button onClick={() => setTab('all')}>Todos</button>
					<button onClick={() => setTab('undone')}>Activos</button>
					<button onClick={() => setTab('done')}>Completados</button>
					<div>
						<label htmlFor="dark-mode">Modo Oscuro</label>
						<input onChange={() => setIsDark(!isDark)} type="checkbox" id="dark-mode" name="dark-mode" />
					</div>
				</div>
				<TodoList
					todos={todos}
					tab={tab}
					isDark={isDark}
				/>
			</header>
		</div>
	);
}

export default App;
