import { useState, useEffect, Children } from 'react';
import { Link } from 'react-router-dom';
import ApiCountries from '../api/config';
import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';

import useFetch from '../hooks/useFetch';
import { Loader } from '../components/UI/spinner/Loader';

const HomePage = () => {
        const [countries, setCountries] = useState([]);

        const [fetchCountry, isCountryLoading, isError] = useFetch(async () => {
                const response = await ApiCountries.getAll('name,capital,flags,population,region`');
                setCountries(response.data);
        });

        useEffect(() => {
                fetchCountry();
        }, []);

        return (
                <>
                        <Controls />
                        {isCountryLoading ? (
                                <Loader />
                        ) : (
                                <List>
                                        {countries.map((c) => {
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

                                                return Children.toArray(<Card {...countryInfo} />);
                                        })}
                                </List>
                        )}
                        {isError && <h1>{isError.message}</h1>}
                </>
        );
};

export default HomePage;
