import styled from 'styled-components';
import { BaseLayout } from '../layout';

export const PasswordRecover = () => {
	return (
		<BaseLayout>
			<Container>
				<form>
					<div className="title-s">
						<h2>¿Olvidaste la contraseña?</h2>

						<p>
							Introduce tu correo electrónico o número movil junto al (+51)
							para reestablecer tu contraseña.
						</p>
					</div>

					<div className="input-item">
						<input type="text" placeholder="Correo electrónico" />
					</div>

					<div className="button-item">
						<a href="/Login" target="_blank" rel="noopener">
							Volver
						</a>

						<button>Recuperar clave</button>
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
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		width: 550px;

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

		.button-item {
			a {
				display: inline-block;
				padding: 1em;
			}
		}

		button {
			text-align: center;
			background: #df0b75;
			color: #fff;
			padding: 15px 80px;
			border: none;
			border-radius: 6px;
			cursor: pointer;
			font-size: 15px;

			&:hover {
				background: #0b75df;
			}
		}
	}
`;
