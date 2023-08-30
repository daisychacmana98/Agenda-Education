import styled from "styled-components";

export const Registro = () => {
  return (
    <Container>
      <LoginForm>
        <Title> Registro de Usuario</Title>
        <Description>Por favor ingrese sus datos para registrarse</Description>
        <Input type="text" placeholder="Nombres" />
        <Input type="text" placeholder="Apellidos" />
        <Input type="date" placeholder="Fecha de nacimiento" />
        <Input type="tel" placeholder="Número de celular (+51)" value="+51" />

        <Input type="text" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Comfirmar contraseña" />
        <Button>Enviar</Button> 
        <Description2>¿Ya tienes una cuenta?<a href="/Login" target="_blank" rel="noopener"> <b>Entra aquí </b></a> </Description2>       
        </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #df0b75, #0B75DF);
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;s

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
  padding: 15px 50px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background:#0B75DF;
  }
`;