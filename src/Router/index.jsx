import { Link, Route, Routes } from 'react-router-dom';
import { Login, PasswordRecover, Register } from '../components/public';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route path="/register" element={<Register />} />

			<Route path="/password-recover" element={<PasswordRecover />} />

			<Route
				path="/*"
				element={
					<>
						<h2>Error 404</h2>
						<Link to="/">Regresar a Login</Link>
					</>
				}
			/>
		</Routes>
	);
};
