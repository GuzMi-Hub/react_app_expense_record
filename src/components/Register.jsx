import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(email)) {
      console.log("Please enter a valid email");
      return;
    }

    if (email === "" || password === "" || password2 === "") {
      console.log("please fill in all the data");
      return;
    }

    if (password !== password2) {
      console.log("Las contraseñas no son iguales");
      return;
    }

    console.log("regsitrsamos usuarios");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

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
      <Form onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Repetir Contraseña"
          value={password2}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button as="button" type="submit" primario>
            Crear Cuenta
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Register;
