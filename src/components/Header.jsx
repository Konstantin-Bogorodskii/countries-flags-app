import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import Container from './Container';

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

const Title = styled(Link).attrs({
	to: '/'
})`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-transform: capitalize;
	cursor: pointer;
`;

const ThemeTitle = styled.span`
	margin-left: 0.75rem;
`;

const Header = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);

		return () => document.body.removeAttribute('data-theme');
	}, [theme]);

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ThemeSwitcher onClick={toggleTheme}>
						{theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
						<ThemeTitle>{theme} Theme</ThemeTitle>
					</ThemeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};

export default Header;
