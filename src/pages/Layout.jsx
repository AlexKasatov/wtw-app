import { Outlet } from 'react-router';
import Header from '../components/Header';
import { Container } from '../components/Container';
import Main from '../components/Main';

const Layout = () => (
        <>
                <Header>Layout</Header>
                <Main>
                        <Outlet />
                </Main>

                <footer />
        </>
);

export default Layout;
