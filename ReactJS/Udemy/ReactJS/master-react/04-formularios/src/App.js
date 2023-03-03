import logo from './logo.svg';
import './App.css';
import FormularioComponent from './components/FormularioComponent';
import { FormularioValidation } from './components/FormularioValidation';
import { useState, createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
	return useContext(AppContext);
};

function App() {
	const [selectedForm, setSelectedForm] = useState('form2');
	const [data, setData] = useState(0);

	const handleRadioChange = e => {
		setSelectedForm(e.target.value);
	}

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setData(prevData => prevData + 1);
	// 	}, 2000);
	// }, []);

	useEffect(() => {
		setTimeout(() => {
			setData(data + 1);
		}, 2000);
	}, [data]);

console.debug('App render!');

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className='radios' onChange={handleRadioChange}>
					<input type="radio" id="form1" value="form1" defaultChecked={selectedForm === 'form1'} name="formulario" />&nbsp;
					<label htmlFor="form1">Formulario 1</label><br />
					<input type="radio" id="form2" value="form2" defaultChecked={selectedForm === 'form2'} name="formulario" />&nbsp;
					<label htmlFor="form2">Formulario 2</label><br />
				</div>
				<h3>Displaying { selectedForm }</h3>
				{selectedForm === 'form1' ?
					<FormularioComponent /> :
					<AppContext.Provider value={data}>
							<FormularioValidation />
					</AppContext.Provider>
				}
			</header>
		</div>
	);
}

export default App;
