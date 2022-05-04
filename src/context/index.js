/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useMemo, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');
        const [countries, setCountries] = useState([]);
        // const [countries, setCountries] = useState([]);

        // const [fetchCountry, isCountryLoading, isError] = useFetch(async () => {
        //         const response = await ApiCountries.getAll('name,capital,flags,population,region');
        //         setCountries(response.data);
        // });

        // useEffect(() => {
        //         fetchCountry();
        // }, []);

        const toggleTheme = () => {
                setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
        };

        // const value = useMemo(() => ({ theme, toggleTheme, countries, setCountries }), [theme, countries]);

        const value = { theme, toggleTheme, countries, setCountries };

        return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
