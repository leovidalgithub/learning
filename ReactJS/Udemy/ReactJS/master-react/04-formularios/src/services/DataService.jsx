import { axiosInstance } from './AxiosService';

export const getAllResources = () => {
	return axiosInstance({
		method: 'GET',
		url: 'scraper/getAllResources'
		// headers:{
		// 	'Authorization': AUTH_TOKEN
		// }
	});
}

export const getAllResourcesMedia = () => {
return axiosInstance({
		method: 'GET',
	url: '/builder/getAllResourcesMedia'
	});
}