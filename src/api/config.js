const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

export const searchByCountry = (country) => `${BASE_URL}name/${country}`;

export const filterByCode = (code) => `${BASE_URL}alpha?codes=${code.join()}`;

// TODO refactor API, and create useFetching hook
export default class Api {
        static get(url) {
                return fetch(url)
                        .then((response) => response.json())
                        .catch((error) => console.log(error));
        }
}
