import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import Button from '../components/ui/Button';
import { searchByCountryName } from '../api/api';
import CountryInfo from '../components/CountryInfo';

const CountryDetailsPage = () => {
	const country = useLoaderData();
	const navigate = useNavigate();

	console.log('country ==>', country);
	return (
		<div>
			<Button />
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			{country && <CountryInfo {...country} />}
		</div>
	);
};

export default CountryDetailsPage;

export const countryDetailsLoader = ({ params }) => {
	return axios
		.get(searchByCountryName(params.name))
		.then(response => response.data[0])
		.catch(error => {
			throw new Error(error.message);
		});
};
