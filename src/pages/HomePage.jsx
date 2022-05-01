import { useState, useEffect, Children } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../api/config';
import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';

const HomePage = () => {
        const [countries, setCountries] = useState([]);
        console.log("🚀 ~ file: HomePage.jsx ~ line 10 ~ HomePage ~ countries", countries)

        useEffect(() => {
                axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }, []);

        return (
                <>
                        <Controls />
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
                </>
        );
};

export default HomePage;
