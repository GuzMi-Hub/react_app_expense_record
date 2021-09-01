import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../elements/Button";
import styled from "styled-components";
import { Header, Title, ContainerHeader } from "../elements/Header";
import { Form, Input, ButtonContainer } from "../elements/FormElements";
import { ReactComponent as SvgLogin } from "../assets/images/registro.svg";
import { auth } from "../firebase/firebaesConfig";
import { useHistory } from "react-router";
import Alert from "../elements/Alert";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem;
  margin-bottom: 1.25rem;
`;

const Register = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
      case "password2":
        setPassword2(e.target.value);
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

    if (email === "" || password === "" || password2 === "") {
      setStateAlert(true);
      setAlert({ type: "error", msg: "Porfavor rellene todos los datos" });
      return;
    }

    if (password !== password2) {
      setStateAlert(true);
      setAlert({ type: "error", msg: "Las contraseñas no son iguales" });
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      setStateAlert(true);
      let mensaje;
      switch (error.code) {
        case "auth/weak-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      setAlert({ type: "error", msg: mensaje });
    }

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
      <Alert
        type={alert.type}
        msg={alert.msg}
        setStateAelert={setStateAlert}
        stateAlert={stateAlert}
      />
    </>
  );
};

export default Register;
