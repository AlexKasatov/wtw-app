import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useProviderContext } from '../hooks/useProviderContext';

const Details = () => {
        const { countries } = useProviderContext();
        const param = useParams();
        const [country, setCountry] = useState(() => {
                const data = countries.filter((c) => c.name === param.name);
                return data;
        });
        const navigate = useNavigate();

        useEffect(() => {
                setCountry(JSON.parse(localStorage.getItem('country')));
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
                localStorage.setItem('country', JSON.stringify(country));
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [country]);

        const handleGoBack = () => {
                navigate(-1);
        };

        return (
                <>
                        <button onClick={handleGoBack} type="button">
                                GO BACK
                        </button>
                        {country.length >= 1 && <div>{country[0].name}</div>}
                </>
        );
};

export default Details;
