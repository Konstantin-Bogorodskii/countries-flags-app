const BASE_URL = 'https://restcountries.com/v2/';

export const REQUESTS = {
	GET_COUNTRIES: `${BASE_URL}all?fields=name,capital,flags,population,region`,
	SEARCH_BY_NAME: `${BASE_URL}name/`,
	FILTER_BY_CODE: `${BASE_URL}alpha?codes=`
};

export const searchByCountryName = countryName => REQUESTS.SEARCH_BY_NAME + countryName;

export const filterByCode = codes => REQUESTS.FILTER_BY_CODE + codes.join(',');
