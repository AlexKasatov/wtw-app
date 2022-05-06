import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
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
