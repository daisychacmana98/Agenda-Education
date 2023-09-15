import { Navigate, Route, Routes } from 'react-router-dom';

import { PublicRoutes } from './publicRoutes';
import { PrivateRoutes } from './privateRoutes';

export const Router = () => {
	const users = [
		{
			name: 'angel',
			user: 'angel123',
			password: '123456',
		},
		{
			name: 'daisy',
			user: 'daisyl123',
			password: '123456',
		},
	];

	return (
		<Routes>
			<Route path="/auth/*" element={<PublicRoutes />} />
			<Route path="/*" element={<PrivateRoutes />} />
			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
};
