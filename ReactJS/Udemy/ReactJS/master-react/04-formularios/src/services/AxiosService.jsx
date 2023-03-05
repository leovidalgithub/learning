import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080/api/',
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-type": "application/json"
	},
	timeout: 60000 // 1 minute
});

export const setHeaderToken = AUTH_TOKEN => {
	axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}