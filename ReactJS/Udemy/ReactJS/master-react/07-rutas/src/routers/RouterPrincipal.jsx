import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error';

// rutas internas de Panel de Control
import { PanelControl } from '../components/panel/PanelControl';
import { Acerca } from '../components/panel/Acerca';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { InicioPanel } from '../components/panel/InicioPanel';

export const RouterPrincipal = () => {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/inicio"
							className={({isActive, isPending}) => isActive ? "activado" : ""}
							// className={(isActive, isPending) => { console.log('1', isActive)}}
							>
								Inicio</NavLink>
					</li>
					<li>
						<NavLink
							to="/articulos"
							className={({ isActive, isPending }) => isActive ? "activado" : ""}
						>
							Articulos</NavLink>
					</li>
					<li>
						<NavLink
							to="/contacto"
							className={({ isActive, isPending }) => isActive ? "activado" : ""}
						>
							Contacto</NavLink>
					</li>
					<li>
						<NavLink
							to="/redirect"
							className={({ isActive, isPending }) => isActive ? "activado" : ""}
						>
							Redirigir</NavLink>
					</li>
					<li>
						<NavLink
							to="/persona"
							className={({ isActive, isPending }) => isActive ? "activado" : ""}
						>
							Persona</NavLink>
					</li>
					<li>
						<NavLink
							to="/panel"
							className={({ isActive, isPending }) => isActive ? "activado" : ""}
						>
							Panel de Control</NavLink>
					</li>
				</ul>
			</nav>
			<section className='contenido-principal'>
				<Routes>
					<Route path="/" element={<Navigate to="/inicio" />} />
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/articulos" element={<Articulos />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/persona" element={<Persona />} />
					<Route path="/persona/:nombre/:apellido" element={<Persona />} />
					<Route path="/persona/:nombre" element={<Persona />} />
					<Route path="/redirect" element={<Navigate to="/persona/Leonardo/Vidal" />} />
					<Route path="*" element={<Error />} />

					<Route path="/panel/*" element={<PanelControl />}>
						<Route index element={<Navigate to="inicio" />} />
						<Route path="inicio" element={<InicioPanel />} />
						<Route path="acerca" element={<Acerca />} />
						<Route path="gestion" element={<Gestion />} />
						<Route path="crear" element={<Crear />} />
					</Route>
				</Routes>
			</section>
		</BrowserRouter>

	)
}