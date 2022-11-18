import {createContext, useContext, useState} from 'react';

import {fetchAllCountries, fetchCountryByName, fetchCountryByCode} from '../api'

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
    getCountryByCode: (code: string) => Promise<CountriesDataType[]>;
    theme: string;
    changeTheme: () => void
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

    const getCountryByCode = async (code: string) => {
        const {data} = await fetchCountryByCode(code);
        return data
    }

    const [theme, setTheme] = useState<string>('light')
    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <CountriesContext.Provider value={{getAllCountries, getCountry, getCountryByCode, theme, changeTheme}}>
            {children}
        </CountriesContext.Provider>
    )
}