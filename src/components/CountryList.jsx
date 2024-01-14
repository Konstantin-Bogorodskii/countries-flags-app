import styled from 'styled-components';
import CountryItem from './CountryItem';

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 2rem;
	width: 100%;
	padding: 2rem 0;

	@media (min-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 3rem;
		padding: 2.5rem 0;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 4rem;
	}
`;

function CountryList({ countries }) {
	return (
		<Wrapper>
			{countries &&
				countries.map(country => {
					const countryInfo = {
						img: country.flags.png,
						name: country.name,
						info: [
							{
								title: 'Population',
								description: country.population.toLocaleString()
							},
							{
								title: 'Region',
								description: country.region
							},
							{
								title: 'Capital',
								description: country.capital
							}
						]
					};

					return <CountryItem key={country.name} {...countryInfo} />;
				})}
		</Wrapper>
	);
}

export default CountryList;
