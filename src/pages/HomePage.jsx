import { useState, useEffect, Children } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiCountries from '../api/config';
import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';

import useFetch from '../hooks/useFetch';
import { Loader } from '../components/UI/spinner/Loader';
import { useProviderContext } from '../hooks/useProviderContext';

const HomePage = () => {
        const { countries, isCountryLoading, isError } = useProviderContext();
        const [filtredCountries, setFiltredCountries] = useState(countries);

        const navigate = useNavigate();

        const handleSearch = (search, region) => {
                let data = [...countries];

                if (region) {
                        data = data.filter((c) => c.region.inculdes(region));
                }

                if (search) {
                        // eslint-disable-next-line no-unused-vars
                        data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
                }

                setFiltredCountries(data);
        };

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
