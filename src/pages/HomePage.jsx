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

        // const handleReverse = () => {
        //         setFilteredCountries(filteredCountries.reverse());
        //         console.log(filteredCountries);
        // };

        useEffect(() => {
                fetchCountry();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useMemo(() => {
                handleSearch();

                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [countries]);

        const handleOpenDetails = (countryName) => {
                navigate(`/country/${countryName}`);
        };

        return (
                <>
                        <Controls onSearch={handleSearch} />
                        {isCountryLoading ? (
                                <Loader />
                        ) : (
                                <List>
                                        {filteredCountries.map((c) => {
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
                </>
        );
};
export default HomePage;
