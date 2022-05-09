import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { useProviderContext } from '../hooks/useProviderContext';

const HeaderEl = styled.header`
        box-shadow: ${({ theme }) => theme.shadow};
        background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
`;

// ? Refactor Mode Switcher and Title with nestet styles

const Title = styled(Link).attrs({
        to: '/',
})`
        color: var(--colors-text);
        font-size: var(--fs-sm);
        text-decoration: none;
        font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
        color: var(--colors-text);
        font-size: var(--fs-sm);
        /* font-weight: var(--fw-bold); */
        cursor: pointer;
        text-transform: capitalize;
        transition: all 0.3s ease;
`;

// !

const Header = () => {
        const { toggleTheme, mode } = useProviderContext();
        //! TODO REFACTOR to ReactContext --------
        // const [theme, setTheme] = useState('light');
        // const toggleThemeOld = () => setTheme(theme === 'light' ? 'dark' : 'light');

        // useEffect(() => {
        //         document.body.setAttribute('data-theme', theme);
        // }, [theme]);
        // !---------------------------

        return (
                <HeaderEl>
                        <Container>
                                <Wrapper>
                                        <Title>Where is the world?</Title>
                                        {/* <button onClick={toggleTheme} type="button">
                                                CHANGE THEME
                                        </button> */}
                                        <ModeSwitcher onClick={toggleTheme}>
                                                {mode === 'light' ? (
                                                        <IoMoonOutline size="14px" />
                                                ) : (
                                                        <IoMoon size="14px" />
                                                )}
                                                <span style={{ marginLeft: '0.75rem' }}>{mode}</span>
                                        </ModeSwitcher>
                                </Wrapper>
                        </Container>
                </HeaderEl>
        );
};

export default Header;
