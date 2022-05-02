import { useState, useEffect, useMemo, Children } from 'react';
import { useParams } from 'react-router-dom';
import ApiCountries from '../api/config';
import useFetch from '../hooks/useFetch';
import { useProviderContext } from '../hooks/useProviderContext';

const Details = () => {
        const param = useParams();
        const { countries } = useProviderContext();
        const [country, setCountry] = useState(() => JSON.parse(localStorage.getItem('country')) || []);
        console.log('🚀 ~ file: Details.jsx ~ line 11 ~ Details ~ country', country.length);
        console.log('🚀 ~ file: Details.jsx ~ line 11 ~ Details ~ country', country);

        const newArray = () => {
                const newArr = [];
                const filtred = countries.find((c) => c.name === param.name);
                newArr.push(filtred);
                setCountry(newArr);
        };
        useEffect(() => {
                localStorage.setItem('country', JSON.stringify(country));
        }, [country]);

        // useMemo(() => {
        //         newArray();
        // }, []);

        return (
                <div>
                        {country.length > 0 ? (
                                <>{Children.toArray(country.map((c) => <div>{c.name}</div>))}</>
                        ) : (
                                <div>Trouble</div>
                        )}
                </div>
        );
};

export default Details;
