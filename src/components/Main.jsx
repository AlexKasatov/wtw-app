import styled from 'styled-components';

import { Container } from './Container';

const Wrapper = styled.main``;

const Main = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

export default Main;
