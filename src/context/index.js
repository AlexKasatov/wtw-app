/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/Theme';

export const Context = createContext();

const ContextProvider = ({ children }) => {
        const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
        const [countries, setCountries] = useState([]);

        useEffect(() => {
                localStorage.setItem('mode', mode);
        }, [mode]);

        const toggleTheme = () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        };

        const value = useMemo(() => ({ mode, toggleTheme, setMode, countries, setCountries }), [mode, countries]);

        // const value = { mode, toggleTheme, setMode, countries, setCountries };

        return (
                <Context.Provider value={value}>
                        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
                </Context.Provider>
        );
};

export default ContextProvider;
