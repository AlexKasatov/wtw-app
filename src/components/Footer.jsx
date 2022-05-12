import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io5';
import { Container } from './Container';
import { Button } from './UI/spinner/Button';

export const FooterStyled = styled.footer`
        background-color: var(--colors-ui-base);

        display: flex;
        align-items: center;
`;

export const Wrapper = styled.div`
        padding: 2rem 0;
        display: flex;
        flex-flow: column wrap;
        align-items: center;

        span {
                font-family: var(--family);
                font-size: var(--fs-lg);
        }

        h1 {
                font-family: var(--family);
                font-size: var(--fs-d-xs);
        }

        @media (min-width: 1024px) {
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
        }

        a {
                text-decoration: none;
        }

        a:visited {
                color: ${({ theme }) => theme.colorText};
        }
`;

const Footer = () => (
        <FooterStyled>
                <Container>
                        <Wrapper>
                                <span> WHERE IS THE WORLD?</span>
                                <h1>ALEX CAST &copy; 2022</h1>
                                <Button>
                                        <IoLogoGithub />
                                        <a href="https://github.com/AlexKasatov" target="_blank" rel="noreferrer">
                                                Watch on GitHub
                                        </a>
                                </Button>
                        </Wrapper>
                </Container>
        </FooterStyled>
);
export default Footer;
