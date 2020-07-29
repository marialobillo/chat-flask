import axios from 'axios';


const axiosClient = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL
    baseURL: 'http://localhost:5000/'
});

export default axiosClient;