import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="container text-center">
			<h1>404</h1>
			<p>Oops! The page you are looking for does not exist.</p>
			<Link
				to="/"
				className="btn btn-primary">
				Go to Home
			</Link>
		</div>
	);
};

export default NotFound;
