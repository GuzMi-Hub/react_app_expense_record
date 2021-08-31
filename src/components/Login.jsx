import React from "react";
import { Helmet } from "react-helmet";
import Button from "../elements/Button";
import styled from "styled-components";
import { Header, Title, ContainerHeader } from "../elements/Header";
import { Form, Input, ButtonContainer } from "../elements/FormElements";
import { ReactComponent as SvgLogin } from "../assets/images/login.svg";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`;

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Iniciar Sesión</Title>
          <div>
            <Button to="/register">Registrarse</Button>
          </div>
        </ContainerHeader>
      </Header>
      <Form>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <ButtonContainer>
          <Button primario>Iniciar Sesión</Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Login;
