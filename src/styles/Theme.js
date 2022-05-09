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
    --fw-light: 300;
    --fw-normal: 600;
    --fw-bold: 800;

    /** Other */
    --raddii: 0.5rem;
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

        shadow: 'rgba(149, 157, 165, 0.2) 0 8px 24px',
};

export const darkTheme = {
        colorText: 'hsl(0, 0%, 100%)',
        colorBg: 'hsl(207, 26%, 17%)',
        colorUiBase: 'hsl(209, 23%, 22%)',

        shadow: 'rgba(6, 2, 30, 0.2) 0 0 8px',
};
