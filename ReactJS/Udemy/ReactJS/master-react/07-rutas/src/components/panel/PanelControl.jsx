import { Outlet, NavLink } from 'react-router-dom';

export const PanelControl = () => {
	return (
		<div>
			<h1>Panel de Control</h1>
			<p>Elige una de estas opciones</p>
			<ul>
				<li>
					<NavLink className={({ isActive }) => isActive ? 'activado' : ''} to="/panel/inicio">Inicio</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? 'activado' : ''} to="acerca">Acerca</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? 'activado' : ''} to="gestion">Gestion</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? 'activado' : ''} to="crear">Crear</NavLink>
				</li>
			</ul>
			{/* rutas internas de Panel de Control */}
			<div>
				<code>THIS CONTENT BELONGS TO PANEL DE CONTROL AS INTERNAL ROUTES</code>
				<Outlet />
			</div>
		</div>
	)
}