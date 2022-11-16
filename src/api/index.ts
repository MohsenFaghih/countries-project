import axios from 'axios';

const API = axios.create({baseURL: "https://restcountries.com/v3.1"})

// Countries routes
export const fetchAllCountries = () => API.get('/all');
// export const fetchAllCountries = () => API.get('/name/peru');

