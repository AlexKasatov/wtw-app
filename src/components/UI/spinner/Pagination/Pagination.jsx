/* eslint-disable no-plusplus */
import { Children, useMemo } from 'react';
import { ActiveButton, PaginationList } from './Pagination.styled';
import { Button } from '../Button';

const Pagination = ({ currentPage, onCurrentPage, totalCountries, countriesPerPage }) => {
        const paginationLinks = [];

        useMemo(() => {
                for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
                        paginationLinks.push(i);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [totalCountries, countriesPerPage, onCurrentPage]);

        return (
                <nav>
                        <PaginationList>
                                {Children.toArray(
                                        paginationLinks.map((number) => (
                                                <li>
                                                        {currentPage === number ? (
                                                                <ActiveButton
                                                                        onClick={() => onCurrentPage(number)}
                                                                        type="button"
                                                                >
                                                                        {number}
                                                                </ActiveButton>
                                                        ) : (
                                                                <Button
                                                                        onClick={() => onCurrentPage(number)}
                                                                        type="button"
                                                                >
                                                                        {number}
                                                                </Button>
                                                        )}
                                                </li>
                                        ))
                                )}
                        </PaginationList>
                </nav>
        );
};

export default Pagination;
