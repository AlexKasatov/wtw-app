const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

export const searchByCountry = (country) => `${BASE_URL}name/${country}`;

export const filterByCode = (code) => `${BASE_URL}alpha?codes=${code.join()}`;
