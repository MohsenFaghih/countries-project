import axios from 'axios';

const API = axios.create({baseURL: "https://restcountries.com/v3.1"})

// Countries routes
export const fetchAllCountries = () => API.get('/all');
export const fetchCountryByName = (name: string) => API.get(`/name/${name}`);
export const fetchCountryByCode = (code: string) => API.get(`/alpha/${code}`);

