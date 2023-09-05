import { styled } from 'styled-components';

export const DesktopNavbar = () => {
	return (
		<Container>
			<aside>
				<ul>
					<li>
						<a href="#">Aula virtual</a>
					</li>
					<li>
						<a href="#">Horario</a>
					</li>
					<li>
						<a href="#">Récord Académico</a>
					</li>
					<li>
						<a href="#">Malla Curricular</a>
					</li>
					<hr />
					<li>
						<a href="#"> Mi perfil</a>
					</li>
					<li>
						<a href="#"> Cerrar sesión</a>
					</li>
				</ul>
			</aside>
		</Container>
	);
};

const Container = styled.div`
	aside {
		background-color: #df0b75;
		float: left;
		padding: 0;
		width: 220px;
		height: 100vh;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 40px 0 10px 0;
	}

	li {
		padding-left: 50px;
		padding-right: 0;
		cursor: pointer;
		height: 56px;
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: #fff;
		text-align: center;
		margin: 20px 10px 20px 0px;
		font-size: 16px;
	}

	li:hover {
		background-color: #f070b0;
	}

	i {
		margin-right: 0px;
		font-size: 20px;
	}

	li.active {
		border-left: 4px solid #3498db;
	}
`;
