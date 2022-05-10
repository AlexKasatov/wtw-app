/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import { Children, useMemo, useState, useEffect } from 'react';
import { ActiveButton, PaginationList } from './Pagination.styled';
import { Button } from '../Button';

const Pagination = ({ currentPage, onCurrentPage, totalCountries, countriesPerPage, setCurrentPage }) => {
        const [arrayCurrentButton, setArrayCurrentButton] = useState([]);
        const numberOfPaginationLinks = [];

        // arrayCurrentButton === numberOfPaginationLinks in old code

        useMemo(() => {
                for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
                        numberOfPaginationLinks.push(i);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [totalCountries, countriesPerPage, onCurrentPage, arrayCurrentButton]);

        useEffect(() => {
                let tempNumberOfPaginationLinks = [...arrayCurrentButton];

                let dotInitial = '...';
                let dotLeft = '...';
                let dotRight = '...';

                if (currentPage >= 1 && currentPage <= 3) {
                        tempNumberOfPaginationLinks = [1, 2, 3, 4, dotInitial, numberOfPaginationLinks.length];
                } else if (currentPage === 4) {
                        const sliced = numberOfPaginationLinks.slice(0, 5);
                        tempNumberOfPaginationLinks = [...sliced, dotInitial, numberOfPaginationLinks.length];
                } else if (currentPage > 4 && currentPage < numberOfPaginationLinks.length - 2) {
                        const sliced1 = numberOfPaginationLinks.slice(currentPage - 2, currentPage);
                        const sliced2 = numberOfPaginationLinks.slice(currentPage, currentPage + 1);
                        tempNumberOfPaginationLinks = [
                                1,
                                dotLeft,
                                ...sliced1,
                                ...sliced2,
                                dotRight,
                                numberOfPaginationLinks.length,
                        ];
                } else if (currentPage > numberOfPaginationLinks.length - 3) {
                        const sliced = numberOfPaginationLinks.slice(numberOfPaginationLinks.length - 4);
                        tempNumberOfPaginationLinks = [1, dotLeft, ...sliced];
                } else if (currentPage === dotInitial) {
                        setCurrentPage(arrayCurrentButton[arrayCurrentButton.length - 3] + 1);
                } else if (currentPage === dotRight) {
                        setCurrentPage(arrayCurrentButton[3] + 2);
                } else if (currentPage === dotLeft) {
                        setCurrentPage(arrayCurrentButton[3] - 2);
                }

                setArrayCurrentButton(tempNumberOfPaginationLinks);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentPage]);

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
                                        arrayCurrentButton.map((number) => (
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
