import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div
			className="error-container"
			style={{ textAlign: 'center', padding: '50px' }}>
			<h1>Oops, something went wrong!</h1>
			<p className="mb-4">An error occurred while trying to fetch the data.</p>
			<Link
				to="/"
				className="btn btn-primary">
				Go to Homepage
			</Link>
		</div>
	);
};

export default Error;
