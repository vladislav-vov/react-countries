import useHttp from '../hooks/http.hook';

const _api = 'https://restcountries.com/v3.1';

const useCountryService = () => {
	const { request, process, setProcess } = useHttp();

	const getAllCountries = async () => {
		return await request(`${_api}/all`);
	};

	const getCountryByName = async (countryName) => {
		return await request(`${_api}/name/${countryName}?fullText=true`);
	};

	return {
		process,
		setProcess,
		getAllCountries,
		getCountryByName,
	};
};

export default useCountryService;
