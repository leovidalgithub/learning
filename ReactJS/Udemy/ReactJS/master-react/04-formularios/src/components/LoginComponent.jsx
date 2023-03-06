import { useEffect, useState } from 'react';
import { login, setHeaderTokenAfterLogin, getAllResources } from '../services';

const LoginComponent = () => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		const doLogin = async () => {
			try {
				const response = await login();
				if (response.data.statusCode === 200) {
					sessionStorage.setItem('AUTH_TOKEN', response.data.token);
					setHeaderTokenAfterLogin();
				}
			} catch (error) {
				console.error(error);
			}
		}
		doLogin();
	},[]);

	const handleGetData = () => {
		getAllResources()
			.then(data => {
				setResources(data.data.data);
				console.log('data', data);
			})
			.catch(error => {
				console.error(error)
			})
	};

	return (
		<div>
			<hr></hr>
			<h3>Login Component</h3>
			<button onClick={handleGetData} >Getdata</button>
			<ul>
				{
					resources.map(resource => {
						return (
							<li key={resource.id} style={{textAlign: 'left'}}>
								{resource.name}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default LoginComponent;