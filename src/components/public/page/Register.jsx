import styled from 'styled-components';
import { BaseLayout } from '../layout';
import { Link } from 'react-router-dom';

export const Register = () => {
	return (
		<BaseLayout>
			<Container>
				<form>
					<h2>Registro de Usuario</h2>
					<p>Por favor ingrese sus datos para registrarse </p>
					<input type="text" placeholder="Nombre" />
					<input type="text" placeholder="Apellido" />
					<input type="date" placeholder="Fecha de nacimiento" />
					<input type="tel" placeholder="Número de celular (+51)" value="+51" />
					<input type="email" placeholder="Correo electrónico" />
					<input type="password" placeholder="Contraseña" />
					<input type="password" placeholder="Confirmar contraseña" />
					<div className="button-item">
						<button>Registrarse</button>
					</div>
					<div className="text-2em">
						<p>¿Ya tienes una cuenta?</p> <Link to="/">Iniciar sesión</Link>
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

    .button-item {
      button {
        text-align: center;
        background: #df0b75;
        color: #fff;
        padding: 16px 30px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 15px;

        &:hover {
          background: #0b75df;
        }
      }
    }
  }
`;
