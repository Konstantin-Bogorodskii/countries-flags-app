import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Main from '../components/Main';
import Spinner from '../components/ui/Spinner';

function RootLayout() {
	const { state } = useNavigation();

	return (
		<>
			<Header />
			<Main>{state === 'loading' ? <Spinner /> : <Outlet />}</Main>
		</>
	);
}

export default RootLayout;
