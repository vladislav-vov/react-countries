import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import useCountryService from '../services/useCountryService';

import setContent from '../helpers/setContent.jsx';

const CountryDetail = () => {
	const { countryName } = useParams();
	const [country, setCountry] = useState(null);
	const { getCountryByName, process, setProcess } = useCountryService();

	useEffect(() => {
		getCountryByName(countryName).then((data) => {
			setCountry(data[0]);
			setProcess('confirmed');
		});
	}, [countryName]);

	const view = () => (
		<div className="container">
			<Link
				to="/"
				className="btn btn-secondary mt-3 mb-4">
				Back
			</Link>
			<div>
				<h1>{country.name.common}</h1>
				<p>Capital: {country.capital}</p>
				<p>Continent: {country.continents.join(', ')}</p>
				<img
					src={country.flags.svg}
					alt={`Flag of ${country.name.official}`}
					style={{ width: '200px' }}
				/>
			</div>
		</div>
	);

	return setContent(process, view);
};

export default CountryDetail;
