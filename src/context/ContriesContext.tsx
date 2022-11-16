import {createContext, useContext} from 'react';

import {fetchAllCountries, fetchCountryByName} from '../api'

type CountriesProviderProps = {
    children: React.ReactNode
}

export type CountriesDataType = {
    name: {common: string, official: any};
    population: number;
    region: string;
    capital: string[];
    flags: {png: string};
    subregion: string;
    tld: string[];
    currencies: {name: {name: string}};
    languages: {name: string};
    borders: string[];
}

type ContriesContext = {
    getAllCountries: () => Promise<CountriesDataType[]>;
    getCountry: (name: string) => Promise<CountriesDataType[]>;
}

export const CountriesContext = createContext({} as ContriesContext)

export const useCountries = () => useContext(CountriesContext)

export const CountriesProvider = ({children}: CountriesProviderProps) => {

    const getAllCountries = async () => {
        const {data} = await fetchAllCountries();
        return data
    }

    const getCountry = async (name: string) => {
        const {data} = await fetchCountryByName(name);
        return data
    }

    return (
        <CountriesContext.Provider value={{getAllCountries, getCountry}}>
            {children}
        </CountriesContext.Provider>
    )
}