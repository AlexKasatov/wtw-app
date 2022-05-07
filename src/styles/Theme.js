import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    /* @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); */

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
    /*
        ? dark theme vars
        --color-text: hsl(0, 0%, 100%);
        --color-bg: hsl(207, 26%, 17%);
        --color-ui-base: hsl(209, 23%, 22%);

        --shadow: rgba(6, 2, 30, 0.2) 0 0 8px;

        ? light theme vars
           --color-text: hsl(200, 15%, 8%);
        --color-bg: hsl(0, 0%, 98%);
         --color-ui-base: hsl(0, 0%, 100%);
        --shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
    }

    */



    /** Other */
    --raddii: 0.5rem;
    }

    body[data-theme="dark"] {
    --spinner: rgb(116, 248, 252);

    --color-text: hsl(0, 0%, 100%);
    --color-bg: hsl(207, 26%, 17%);
    --color-ui-base: hsl(209, 23%, 22%);

    --shadow: rgba(6, 2, 30, 0.2) 0 0 8px;
    }

    body[data-theme="light"] {
    --spinner: rgb(116, 248, 252);

    --color-text: hsl(200, 15%, 8%);
    --color-bg: hsl(0, 0%, 98%);
    --color-ui-base: hsl(0, 0%, 100%);
    /* --color-ui-alt:hsl(200, 15%, 8%); */

    --shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
    }

    body {
    margin: 0;
    font-family: var(--family);
    color: ${({ theme }) => theme.colorText};
    font-weight: var(--fw-light);
    background-color: ${({ theme }) => theme.colorBg};
    transition: all 1s ease;
}

        /*
        ?old styles
        body {
        margin: 0;
        font-family: var(--family);
        color: var(--color-text);
        font-weight: var(--fw-light);
        background-color: var(--color-bg);
        transition: all 1s ease;
        } */

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
