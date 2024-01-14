import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	& h2 {
		font-size: 3rem;
		color: var(--colors-text);
	}
`;

function ErrorPage() {
	const error = useRouteError();

	console.error('error ==>', error);
	return (
		<Container>
			<h2>An unknown error occurred. Check the console for more details.</h2>
			<Link to="/">Back to the Home Page</Link>
		</Container>
	);
}

export default ErrorPage;
