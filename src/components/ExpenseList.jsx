import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerButtons,
  ContainerHeader,
} from "../elements/Header";
import Button from "../elements/Button";

const ExpenseList = () => {
  return (
    <>
      <Helmet>
        <title>Lista de gastos</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title> Lista de gastos</Title>
          <ContainerButtons>
            <Button to="/categorias">Categorías</Button>
            <Button to="lista">Lista de Gastos</Button>
            <Button>X</Button>
          </ContainerButtons>
        </ContainerHeader>
      </Header>
    </>
  );
};

export default ExpenseList;
