/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/Theme';

export const Context = createContext();

const ContextProvider = ({ children }) => {
        const [mode, setMode] = useState('light');
        const [countries, setCountries] = useState([]);

        const toggleTheme = () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        };

        // const value = useMemo(() => ({ theme, toggleTheme, countries, setCountries }), [theme, countries]);

        const value = { mode, toggleTheme, setMode, countries, setCountries };

        return (
                <Context.Provider value={value}>
                        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
                </Context.Provider>
        );
};

export default ContextProvider;
