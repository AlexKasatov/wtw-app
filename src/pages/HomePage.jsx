/* eslint-disable no-console */
import { useState, useEffect, Children, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiCountries from '../api/config';
import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';
import { useProviderContext } from '../hooks/useProviderContext';
import useFetch from '../hooks/useFetch';
import { Loader } from '../components/UI/spinner/Loader';
import Pagination from '../components/UI/Pagination/Pagination';
import useTitle from '../hooks/useTitle';

const HomePage = () => {
        const { countries, setCountries } = useProviderContext();
        const navigate = useNavigate();
        const [fetchCountry, isCountryLoading, isError] = useFetch(async () => {
                if (!countries.length) {
                        const response = await ApiCountries.getAll('name,capital,flags,population,region');
                        setCountries(response.data);
                }
        });
        const [filteredCountries, setFilteredCountries] = useState(countries);
        const [paginatedCountries, setPaginatedCountries] = useState(filteredCountries);
        const [countriesPerPage] = useState(20);
        const [currentPage, setCurrentPage] = useState(1);

        // filter and search countries
        const handleSearch = (region, search) => {
                let data = [...countries];

                if (region) {
                        data = data.filter((c) => c.region.includes(region));
                }

                if (search) {
                        data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
                }

                setFilteredCountries(data);

                setCurrentPage(1); // update current page
        };

        //  set up array for pagination
        const handlePagination = () => {
                const indexOfLastCountry = currentPage * countriesPerPage; // get the index of the last country
                const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // get the index of the first country
                let data = [...filteredCountries]; // copy the filtered countries state
                if (data.length >= 2) {
                        // if there are more than 2 countries
                        data = data.slice(indexOfFirstCountry, indexOfLastCountry);
                        setPaginatedCountries(data);
                }
                setPaginatedCountries(data);
        };

        useTitle('WTW');

        // fetch countries data
        useEffect(() => {
                fetchCountry();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [countries]);

        // memoize search & sort and update [filteredCountries] state
        useMemo(() => {
                handleSearch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [countries]);

        // memoize pagination and update [paginatedCountries] state
        useMemo(() => {
                handlePagination();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [filteredCountries, currentPage]);

        // open country details page
        const handleOpenDetails = (countryName) => {
                navigate(`/country/${countryName}`);
        };

        //  update current page
        const handleCurrentPage = (page) => setCurrentPage(page);

        return (
                <>
                        <Controls onSearch={handleSearch} />
                        {isCountryLoading ? (
                                <Loader />
                        ) : (
                                <List>
                                        {paginatedCountries.map((c) => {
                                                const countryInfo = {
                                                        img: c.flags.png,
                                                        name: c.name,
                                                        info: [
                                                                {
                                                                        title: 'Population',
                                                                        description: c.population.toLocaleString(),
                                                                },
                                                                {
                                                                        title: 'Region',
                                                                        description: c.region,
                                                                },
                                                                {
                                                                        title: 'Capital',
                                                                        description: c.capital,
                                                                },
                                                        ],
                                                };

                                                return Children.toArray(
                                                        <Card
                                                                {...countryInfo}
                                                                onOpenDetails={() => handleOpenDetails(c.name)}
                                                        />
                                                );
                                        })}
                                </List>
                        )}
                        {isError && <h1>{isError.message}</h1>}
                        <Pagination
                                currentPage={currentPage}
                                onCurrentPage={handleCurrentPage}
                                totalCountries={filteredCountries.length}
                                countriesPerPage={countriesPerPage}
                                setCurrentPage={setCurrentPage}
                        />
                </>
        );
};
export default HomePage;
