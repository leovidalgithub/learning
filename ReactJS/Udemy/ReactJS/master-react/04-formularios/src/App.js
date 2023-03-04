import logo from './logo.svg';
import './App.css';
import FormularioComponent from './components/FormularioComponent';
import { FormularioValidation } from './components/FormularioValidation';
import { useState, createContext, useContext, useEffect } from 'react';
import FetchingData from './components/FetchingData';

const AppContext = createContext();

export const useAppContext = () => {
	return useContext(AppContext);
};

function App() {
	const [selectedForm, setSelectedForm] = useState('form3');
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
		}, 3000);
	}, [data]);

	const showComponent = () => {
		switch (selectedForm) {
			case 'form1':
				return <FormularioComponent />
			case 'form2':
				return <FormularioValidation />
			case 'form3':
				return <FetchingData />
			default:
				return <h3>No component to display!</h3>
		}
	}

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
					<input type="radio" id="form3" value="form3" defaultChecked={selectedForm === 'form3'} name="formulario" />&nbsp;
					<label htmlFor="form3">Formulario 3</label><br />
				</div>
				<h3>Displaying { selectedForm }</h3>
				<AppContext.Provider value={data}>
					{showComponent()}
				</AppContext.Provider>
			</header>
		</div>
	);
}

export default App;
