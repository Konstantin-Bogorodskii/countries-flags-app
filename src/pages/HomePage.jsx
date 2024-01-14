import CountryList from '../components/CountryList';
import Controls from '../components/Controls';
import axios from 'axios';
import { REQUESTS } from '../api/api';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
	const countries = useLoaderData();

	const [filteredCountries, setFilteredCountries] = useState(countries);

	const handleSearch = (search, region) => {
		let data = [...countries];

		if (region) data = data.filter(c => c.region.includes(region));

		if (search) data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

		setFilteredCountries(data);
	};

	return (
		<>
			<Controls handleSearch={handleSearch} />
			{filteredCountries && filteredCountries.length > 0 ? (
				<CountryList countries={filteredCountries} />
			) : (
				<h2>No matching countries...</h2>
			)}
		</>
	);
}

export default HomePage;

export const countriesLoader = () => {
	return axios
		.get(REQUESTS.GET_COUNTRIES)
		.then(response => response.data)
		.catch(error => {
			throw new Error(error.message);
		});
};
