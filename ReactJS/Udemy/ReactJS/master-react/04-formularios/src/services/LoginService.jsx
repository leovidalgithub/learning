import { axiosInstance, setHeaderToken } from './AxiosService';

export const login = () => {
	return axiosInstance({
		method: 'POST',
		url: 'users/login',
		data: {
			email: 'leo@leovidal.es',
			pass: 'pqowpqow'
		}
	});
}

export const setHeaderTokenAfterLogin = () => {
	const AUTH_TOKEN = sessionStorage.getItem('AUTH_TOKEN');
	setHeaderToken(AUTH_TOKEN);
}