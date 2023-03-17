import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';

export const RouterPrincipal = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/articulos" element={<Articulos />} />
				<Route path="/contacto" element={<Contacto />} />
			</Routes>
		</BrowserRouter>
	)
}