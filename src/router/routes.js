import HomePage from '../pages/HomePage';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

const publicRoutes = [
        { index: true, element: <HomePage />, replace: false },
        { index: false, path: 'details', element: <Details />, replace: false },
        { index: false, path: '*', element: <NotFound />, replace: false },
];

export default publicRoutes;
