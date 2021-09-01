import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import Button from "../elements/Button";
import styled from "styled-components";
import { Header, Title, ContainerHeader } from "../elements/Header";
import { Form, Input, ButtonContainer } from "../elements/FormElements";
import { ReactComponent as SvgLogin } from "../assets/images/login.svg";
import Alert from "../elements/Alert";
import { auth } from "../firebase/firebaesConfig";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`;

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stateAlert, setStateAlert] = useState(false);
  const [alert, setAlert] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStateAlert(false);
    setAlert({});

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(email)) {
      setStateAlert(true);
      setAlert({ type: "error", msg: "Porfavor coloque un email valido" });
      return;
    }
    if (email === "" || password === "") {
      setStateAlert(true);
      setAlert({ type: "error", msg: "Porfavor rellene todos los datos" });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      setStateAlert(true);
      let mensaje;

      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "La contraseña no es correcta";
          break;
        case "auth/user-not-found":
          mensaje =
            "No se encontró ninguna cuenta con este correo electronico ";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      setAlert({ type: "error", msg: mensaje });
    }
    setEmail("");
    setPassword("");
  };

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
        <ButtonContainer>
          <Button as="button" type="submit" primario>
            Iniciar Sesión
          </Button>
        </ButtonContainer>
      </Form>
      <Alert
        type={alert.type}
        msg={alert.msg}
        setStateAelert={setStateAlert}
        stateAlert={stateAlert}
      />
    </>
  );
};

export default Login;
