import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Layout = () => (
        <>
                <Header>Layout</Header>

                <Main>
                        <Outlet />
                </Main>

                <Footer />
        </>
);

export default Layout;
