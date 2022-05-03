import { useLayoutEffect, useState, useEffect, useMemo, Children } from 'react';
import { useParams } from 'react-router-dom';
import ApiCountries from '../api/config';
import useFetch from '../hooks/useFetch';
import { useProviderContext } from '../hooks/useProviderContext';

const Details = () => {
        const { countries } = useProviderContext();
        const param = useParams();
        const [country, setCountry] = useState(() => {
                const data = countries.filter((c) => c.name === param.name);
                return data;
        });

        useEffect(() => {
                setCountry(JSON.parse(window.localStorage.getItem('country', JSON.stringify(country))));
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
                window.localStorage.setItem('country', JSON.stringify(country));
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [country]);

        return country.length >= 1 && <div>{country[0].name}</div>;
};

export default Details;
