import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Select from './ui/Select';
import Search from './ui/Search';

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' }
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

function Controls({ handleSearch }) {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState('');

	useEffect(() => {
		const regionValue = region?.value || '';
		handleSearch(search, regionValue);
	}, [search, region]);

	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch} />
			<Select
				options={options}
				placeholder="Filter by Region"
				isClearable
				isSearchable={false}
				value={region}
				onChange={setRegion}
			/>
		</Wrapper>
	);
}

export default Controls;
