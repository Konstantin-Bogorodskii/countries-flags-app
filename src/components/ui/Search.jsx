import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Label = styled.label`
	background-color: var(--colors-ui-base);
	padding: 15px;
	display: flex;
	align-items: center;
	border-radius: var(--radii);
	box-shadow: var(--shadow);
	width: 100%;
	margin-bottom: 1rem;

	@media (min-width: 767px) {
		margin-bottom: 0;
		width: 280px;
	}
`;

const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...'
})`
	margin-left: 1rem;
	border: none;
	outline: none;
	color: var(--color-text);
	background-color: var(--colors-ui-base);
`;

function Search({ search, setSearch }) {
	return (
		<Label>
			<IoSearch size="14px" />
			<Input onChange={e => setSearch(e.target.value)} value={search} />
		</Label>
	);
}

export default Search;
