import { Outlet } from 'react-router';
import Header from '../components/Header';
import { Container } from '../components/Container';

const Layout = () => (
        <>
                <Header>Layout</Header>
                <Container>
                        <Outlet />
                </Container>

                <footer />
        </>
);

export default Layout;
