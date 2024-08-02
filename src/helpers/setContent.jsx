import { Spinner, Error } from '../components';

const setContent = (process, Component) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
		case 'loading':
			return <Spinner />;
		case 'confirmed':
			return <Component />;
		case 'error':
			return <Error />;
		default:
			throw new Error('Unexpected process state');
	}
};

export default setContent;
