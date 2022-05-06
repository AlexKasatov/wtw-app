import HomePage from '../pages/HomePage';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';
import CountryDetails from '../pages/CountryDetails';

const publicRoutes = [
        { index: true, element: <HomePage />, replace: false },
        { index: false, path: '/country/:name', element: <CountryDetails />, replace: false },
        { index: false, path: '*', element: <NotFound />, replace: false },
];

export default publicRoutes;
