import React from "react";
import { Helmet } from "react-helmet";
import Button from "../elements/Button";
import styled from "styled-components";
import { Header, Title, ContainerHeader } from "../elements/Header";
import { Form, Input, ButtonContainer } from "../elements/FormElements";
import { ReactComponent as SvgLogin } from "../assets/images/registro.svg";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem;
  margin-bottom: 1.25rem;
`;

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Crear Cuenta</Title>
          <div>
            <Button to="/login">Iniciar Sesion</Button>
          </div>
        </ContainerHeader>
      </Header>
      <Form>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <Input
          type="password"
          name="password2"
          placeholder="Repetir Contraseña"
        />
        <ButtonContainer>
          <Button primario>Crear Cuenta</Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Register;
