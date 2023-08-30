import styled from "styled-components";

export const Olvido_clave = () => {
  return (
    <Container>
      <LoginForm>
        <Title> ¿Olvidaste la contraseña?</Title>
        <Description>Introduce tu correo electrónico o número movil junto al (+51) para reestablecer tu contraseña.</Description>
        <Input type="text" placeholder="Correo electrónico" />
        <Button>Recuperar clave</Button> 
        <Description2><a href="/Login" target="_blank" rel="noopener"> <b>Volver </b></a> </Description2>       

        </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #75DF0B, #0B75DF);
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;

const LoginForm = styled.form`
  background: #fff;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align:center;
  width: 550px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #df0b75;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  font-style: normal;
  color: #1b191a;
`;
const Description2 = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
  text-align: center;
  font-style: normal;
  line-height: 20px;

`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  text-align: center;
  background: #df0b75;
  color: #fff;
  padding: 15px 80px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background:#0B75DF;
  }
`;