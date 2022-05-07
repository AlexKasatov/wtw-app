/* eslint-disable no-console */
import { useState, Children, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import useFetch from '../hooks/useFetch';
import ApiCountries from '../api/config';
import { Button } from '../components/UI/spinner/Button';
import Info from '../components/Info';
import Map from '../components/Map';

const CountryDetails = () => {
        const param = useParams();
        const navigate = useNavigate();

        const [country, setCountry] = useState(null);
        const [fetchCountry, isCountryLoading, isError] = useFetch(async (parameters) => {
                const response = await ApiCountries.getByName(param.name);
                setCountry(response.data[0]);
        });

        useEffect(() => {
                fetchCountry(`${param.name}`);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [param.name]);

        // const openSubCounrty = () => {
        //         navigate(`${param}/subcountry`);
        // };

        return (
                <>
                        <Button onClick={() => navigate(-1)} type="button">
                                <IoArrowBack /> Back
                        </Button>
                        {country && <Info {...country} />}
                </>
        );
};

export default CountryDetails;
