import { styled } from 'styled-components';

export const BaseLayout = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: linear-gradient(to bottom, #75df0b, #0b75df);
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
