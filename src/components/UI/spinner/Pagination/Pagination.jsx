/* eslint-disable no-plusplus */
import { Children, useMemo } from 'react';
import { ActiveButton, PaginationList } from './Pagination.styled';
import { Button } from '../Button';

const Pagination = ({ currentPage, onCurrentPage, totalCountries, countriesPerPage, setCurrentPage }) => {
        const paginationLinks = [];

        useMemo(() => {
                for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
                        paginationLinks.push(i);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [totalCountries, countriesPerPage, onCurrentPage]);

        const handleCurrentPageIncrement = () => {
                if (currentPage < paginationLinks.length) setCurrentPage((prev) => prev + 1);
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
                                <Button
                                        disabled={currentPage === paginationLinks.length}
                                        onClick={handleCurrentPageIncrement}
                                >
                                        Next
                                </Button>
                        </PaginationList>
                </nav>
        );
};

export default Pagination;
