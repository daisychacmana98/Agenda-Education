import { FaLock, FaUser } from 'react-icons/fa';
import { BaseLayout } from '../../components/public';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Login = () => {
	return (
		<BaseLayout>
			<Container>
				<form>
					<h2>Admin Login</h2>
					<p>Por favor ingresa tu correo electrónico y tu contraseña</p>
					<div className="input-container">
						<FaUser />
						<input type="text" placeholder="Correo electrónico" />
					</div>
					<div className="input-container">
						<FaLock />
						<input type="password" placeholder="Contraseña" />
					</div>
					<div className="button-container">
						<button>Iniciar sesión</button>
						<Link to="/password-recover">¿Olvidaste tu contraseña?</Link>
					</div>
					<div className="text-2em">
						<p>¿Aún no tienes cuenta?</p>
						<Link to="/register">Crea una nueva cuenta</Link>
					</div>
				</form>
			</Container>
		</BaseLayout>
	);
};

const Container = styled.div`
	form {
		background: #fff;
		padding: 2em;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		width: 350px;

		h2 {
			font-size: 24px;
			margin-bottom: 20px;
			text-align: center;
			color: ${({ theme }) => theme.colors.primary};
		}

		p {
			font-size: 18px;
			margin-bottom: 20px;
			text-align: center;
			font-style: normal;
			color: #1b191a;
		}

		input {
			width: 100%;
			padding: 10px;
			margin-bottom: 10px;
			border: 1px solid #ccc;
			border-radius: 4px;
		}

		.text-2em {
			p {
				font-size: 14px;
				margin-bottom: 10px;
				text-align: center;
				font-style: normal;
				color: #1b191a;
				display: inline-block;
				font-weight: bold;
				padding: 2px;
			}
		}
		
		a {
			font-size: 16px;
			margin-bottom: 20px;
			text-align: center;
			font-style: normal;
			color: ${({ theme }) => theme.colors.secondary};
			font-weight: bold;
			padding: 2px;
		}

		.button-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			line-height: 2;
		}

		button {
			background: ${({ theme }) => theme.colors.primary};
			color: #fff;
			padding: 16px 30px;
			border: none;
			border-radius: 6px;
			cursor: pointer;
			font-size: 15px;
			width: 180px;

			&:hover {
				background: ${({ theme }) => theme.colors.secondary};
			}
		}
		.input-container {
			display: flex;
			align-items: center;
			margin-bottom: 10px;

			svg {
				font-size: 20px;
				margin-right: 10px; /* Espacio entre el icono y el campo de entrada */
				color: ${({ theme }) => theme.colors.primary};
			}
	}
`;
