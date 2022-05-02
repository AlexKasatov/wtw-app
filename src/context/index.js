import { createContext, useState, useMemo, useEffect } from 'react';
import ApiCountries from '../api/config';
import useFetch from '../hooks/useFetch';

export const Context = createContext();

const ContextProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');
        const [countries, setCountries] = useState([]);

        const [fetchCountry, isCountryLoading, isError] = useFetch(async () => {
                const response = await ApiCountries.getAll('name,capital,flags,population,region`');
                setCountries(response.data);
        });

        useEffect(() => {
                fetchCountry();
        }, []);

        const toggleTheme = () => {
                setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
        };

        const value = useMemo(
                () => ({ theme, toggleTheme, countries, setCountries, isCountryLoading, isError }),
                [theme, countries]
        );

        return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
