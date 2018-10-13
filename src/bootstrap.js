import axios from 'axios';
//import {Cookie} from './lib/Cookie';

/* Global variables */
window.axios = axios;

//window.axios.defaults.baseURL = ( process.env.NODE_ENV !== 'production') ? '/' : '';

// Global images url
//window.IMAGE_PATH = ( process.env.NODE_ENV !== 'production') ? '' : '';

// Add a request interceptor
axios.interceptors.request.use( config => {
  	return config;
},(error) => Promise.reject(error) );


// Add a response interceptor
axios.interceptors.response.use( response => {
  	// Do something with response data
  	return response;
}, (error) => {
	
  	// Do something with response error
  	return Promise.reject(error);
});
