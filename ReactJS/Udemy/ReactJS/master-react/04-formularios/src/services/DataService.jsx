import { axiosInstance } from './AxiosService';

export const getNewData = () => {
	return axiosInstance({
		method: 'GET',
		url: 'scraper/getAllResources'
		// headers:{
		// 	'Authorization': AUTH_TOKEN
		// }
	});
}