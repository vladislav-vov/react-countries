import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CountryList, CountryDetail, NotFound } from './components';

const router = createBrowserRouter([
	{
		path: '/',
		element: null,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <CountryList />,
			},
			{
				path: '/country/:countryName',
				element: <CountryDetail />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
