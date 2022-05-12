/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import useFetch from '../hooks/useFetch';
import ApiCountries from '../api/config';
import { Button } from '../components/UI/spinner/Button';
import Info from '../components/Info';
import { Loader } from '../components/UI/spinner/Loader';
import useTitle from '../hooks/useTitle';

const CountryDetails = () => {
        const param = useParams();
        const navigate = useNavigate();

        const [country, setCountry] = useState(null);
        const [fetchCountry, isCountryLoading, isError] = useFetch(async () => {
                const response = await ApiCountries.getByName(param.name);
                setCountry(response.data[0]);
        });

        useTitle(param.name, param.name);

        useEffect(() => {
                fetchCountry(`${param.name}`);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [param.name]);

        return (
                <>
                        <Button onClick={() => navigate(-1)} type="button">
                                <IoArrowBack /> Back
                        </Button>

                        {isCountryLoading ? <Loader /> : country && <Info {...country} />}
                        {isError && <div>{isError.message}</div>}
                </>
        );
};

export default CountryDetails;
