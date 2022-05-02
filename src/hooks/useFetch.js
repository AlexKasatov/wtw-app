import { useState } from 'react';

const useFetch = (cb) => {
        const [isCountryLoading, setIsCountryLoading] = useState(false);
        const [isError, setIsError] = useState('');

        const fetchCountry = async () => {
                try {
                        setIsCountryLoading(true);
                        await cb();
                } catch (error) {
                        setIsError(error);
                } finally {
                        setIsCountryLoading(false);
                }
        };

        return [fetchCountry, isCountryLoading, isError];
};

export default useFetch;
