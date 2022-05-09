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
import Pagination from '../components/UI/spinner/Pagination/Pagination';

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
        const [countriesPerPage] = useState(14);
        const [currentPage, setCurrentPage] = useState(1);

        const handleSearch = (region, search) => {
                let data = [...countries];

                if (region) {
                        data = data.filter((c) => c.region.includes(region));
                }

                if (search) {
                        data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
                }

                setFilteredCountries(data);
        };

        useEffect(() => {
                fetchCountry();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useMemo(() => {
                handleSearch();

                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [countries]);

        // * Open country details page

        const handleOpenDetails = (countryName) => {
                navigate(`/country/${countryName}`);
        };

        // * Pagination
        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        const countriesPaginated = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

        const handleCurrentPage = (page) => setCurrentPage(page);

        return (
                <>
                        <Controls onSearch={handleSearch} />
                        {isCountryLoading ? (
                                <Loader />
                        ) : (
                                <List>
                                        {countriesPaginated.map((c) => {
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
                        />
                </>
        );
};
export default HomePage;
