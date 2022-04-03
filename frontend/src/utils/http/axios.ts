import axios, { AxiosInstance } from "axios";

const _axios: AxiosInstance = axios.create({
	baseURL: "http://localhost:1337",
});

export default _axios;
