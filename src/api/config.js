import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

export const searchByCountry = (name) => `${BASE_URL}name/${name}`;

export const filterByCode = (code) => `${BASE_URL}alpha?codes=${code.join()}`;

// TODO refactor API, and create useFetching hook
export default class ApiCountries {
        static async getAll(query) {
                const response = await axios.get(`${BASE_URL}all`, {
                        params: {
                                fields: query,
                        },
                });
                return response;
        }

        static async getByName(param, query) {
                const response = await axios.get(`${BASE_URL}name/${param}`, {
                        params: {
                                fields: query,
                        },
                });
                return response;
        }
}
