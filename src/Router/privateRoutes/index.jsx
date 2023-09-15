import { Routes, Route } from 'react-router';
import { Home } from '../../pages';

export const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/*" element={<Home />} />
		</Routes>
	);
};
