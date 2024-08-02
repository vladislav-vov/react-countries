import { useCallback, useState } from 'react';

const useHttp = () => {
	const [process, setProcess] = useState('waiting');

	const request = useCallback(
		async (
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' }
		) => {
			setProcess('loading');

			const response = await fetch(url, { method, body, headers });

			if (!response.ok) {
				setProcess('error');
				throw new Error(`Couldn't fetch ${url}, status: ${response.status}`);
			}

			const data = await response.json();

			return data;
		},
		[]
	);

	return { request, process, setProcess };
};

export default useHttp;
