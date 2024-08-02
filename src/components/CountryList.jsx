import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import setContent from '../helpers/setContent.jsx';

import useCountryService from '../services/useCountryService';

const CountryList = () => {
	const [countries, setCountries] = useState([]);
	const { getAllCountries, process, setProcess } = useCountryService();

	useEffect(() => {
		getAllCountries().then((data) => {
			const sortedCountries = data.sort((a, b) =>
				a.name.common.localeCompare(b.name.common)
			);
			setCountries(sortedCountries);
			setProcess('confirmed');
		});
	}, []);

	const countriesList = () => {
		return (
			<ul className="list-group">
				{countries.map((country) => (
					<li key={country.cca3}>
						<Link
							to={`/country/${country.name.common}`}
							className="list-group-item list-group-item-action">
							{country.name.common}
						</Link>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="container">
			<h1 className="mb-4">Countries List</h1>
			{setContent(process, countriesList)}
		</div>
	);
};

export default CountryList;
