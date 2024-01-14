import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';

import HomePage, { countriesLoader } from '../pages/HomePage';
import CountryDetailsPage, { countryDetailsLoader } from '../pages/CountryDetailsPage';
import ErrorPage from '../pages/ErrorPage';

function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: countriesLoader
				},
				{
					path: 'country/:name',
					element: <CountryDetailsPage />,
					loader: countryDetailsLoader
				}
			]
		}
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
