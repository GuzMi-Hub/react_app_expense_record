import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerButtons,
  ContainerHeader,
} from "./elements/Header";
import Button from "./elements/Button";

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title> Agregar Gasto</Title>
          <ContainerButtons>
            <Button to="/categorias">Categorías</Button>
            <Button to="lista">Lista de Gastos</Button>
            <Button to="/">X</Button>
          </ContainerButtons>
        </ContainerHeader>
      </Header>
    </>
  );
}

export default App;
