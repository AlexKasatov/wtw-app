import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    :root {
    /** Typography */
    --family: "Nunito", sans-serif;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 20px;
    --fs-d-xs: 24px;
    --fs-d-sm: 30px;
    --fw-light: 300;
    --fw-normal: 600;
    --fw-bold: 800;

    /** Other */
    --raddii: 0.5rem;
    --raddii-btn: 2rem;
    }

    body {
    margin: 0;
    font-family: var(--family);
    color: ${({ theme }) => theme.colorText};
    font-weight: var(--fw-light);
    background-color: ${({ theme }) => theme.colorBg};
    transition: all 1s ease;
}
`;

export const lightTheme = {
        colorText: 'hsl(200, 15%, 8%)',
        colorBg: 'hsl(0, 0%, 98%)',
        colorUiBase: 'hsl(0, 0%, 100%)',
        colorUiBase2: '#03DAC5',
        shadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
};

export const darkTheme = {
        colorText: 'hsl(0, 0%, 100%)',
        colorBg: '#121212;',
        colorUiBase: '#3700B3',
        colorUiBase2: '#BB86FC',
        shadow: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
};
