import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
  href: '/',
})``;

const ModeSwitcher = styled.div``;

const Header = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {}, []);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher>
            <IoMoon /> Light Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
