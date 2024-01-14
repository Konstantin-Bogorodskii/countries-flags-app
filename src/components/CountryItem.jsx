import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	all: unset;
`;

const Wrapper = styled.article`
	border-radius: var(--radii);
	background-color: car(--colors-ui-base);
	box-shadow: var(--shadow);
	cursor: pointer;
	overflow: hidden;
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--shadow);
`;

const Content = styled.div`
	padding: 1rem 1.5rem 2rem;
`;

const Title = styled.h3`
	margin: 0;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 1rem 0 0;
`;

const ListItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& > b {
		font-weight: var(--fw-bold);
	}
`;

function CountryItem({ img, name, info = [] }) {
	return (
		<StyledLink to={`country/${name}`}>
			<Wrapper>
				<Image src={img} alt={name} />
				<Content>
					<Title>{name}</Title>
					<List>
						{info.map(item => (
							<ListItem key={item.title}>
								<b>{item.title}:</b> {item.description}
							</ListItem>
						))}
					</List>
				</Content>
			</Wrapper>
		</StyledLink>
	);
}

export default CountryItem;
