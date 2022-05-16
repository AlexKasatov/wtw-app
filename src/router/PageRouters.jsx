import { Children } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import publicRoutes from './routes';

// ? Deploy CRA with react-router-dom use HashRouter instead of BrowserRouter

export const PageRouters = () => (
        <HashRouter>
                <Routes>
                        <Route path="/" element={<Layout />}>
                                {Children.toArray(
                                        publicRoutes.map((page) => (
                                                <Route
                                                        index={page.index}
                                                        element={page.element}
                                                        replace={page.replace}
                                                        path={page.path}
                                                />
                                        ))
                                )}
                        </Route>
                </Routes>
        </HashRouter>
);
