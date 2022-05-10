/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */

import { Children, useMemo } from 'react';
import { ActiveButton, PaginationList } from './Pagination.styled';
import { Button } from '../spinner/Button';

const Pagination = ({ currentPage, onCurrentPage, totalCountries, countriesPerPage, setCurrentPage }) => {
        const numberOfPaginationLinks = [];

        useMemo(() => {
                for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
                        numberOfPaginationLinks.push(i);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentPage, numberOfPaginationLinks, countriesPerPage, totalCountries]);

        const handleCurrentPageIncrement = () => {
                if (currentPage < numberOfPaginationLinks.length) {
                        setCurrentPage((prev) => prev + 1);
                }
        };

        const handleCurrentPageDecrement = () => {
                if (currentPage > 1) setCurrentPage((prev) => prev - 1);
        };

        return (
                <nav>
                        <PaginationList>
                                <Button onClick={handleCurrentPageDecrement} disabled={currentPage === 1}>
                                        Prev
                                </Button>
                                {Children.toArray(
                                        numberOfPaginationLinks.map((number) => (
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
                                <Button
                                        onClick={handleCurrentPageIncrement}
                                        disabled={currentPage === numberOfPaginationLinks.length}
                                >
                                        Next
                                </Button>
                        </PaginationList>
                </nav>
        );
};

export default Pagination;
