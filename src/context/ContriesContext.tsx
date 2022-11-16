import {createContext, useContext} from 'react';

import {fetchAllCountries} from '../api'

type CountriesProviderProps = {
    children: React.ReactNode
}

export type CountriesDataType = {
    name: {common: string, official: any};
    population: string;
    region: string;
    capital: string[];
}

type ContriesContext = {
    getAllCountries: () => Promise<CountriesDataType[]>;
}

export const CountriesContext = createContext({} as ContriesContext)

export const useCountries = () => useContext(CountriesContext)

export const CountriesProvider = ({children}: CountriesProviderProps) => {

    const getAllCountries = async () => {
        const {data} = await fetchAllCountries();
        return data
    }

    return (
        <CountriesContext.Provider value={{getAllCountries}}>
            {children}
        </CountriesContext.Provider>
    )
}