import { Children } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import publicRoutes from './routes';

export const PageRouters = () => (
        <BrowserRouter>
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
        </BrowserRouter>
);
