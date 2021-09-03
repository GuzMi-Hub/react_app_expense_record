import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerButtons,
  ContainerHeader,
} from "../elements/Header";
import Button from "../elements/Button";
import BarExpense from "./BarExpense";

const EditExpense = () => {
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
            <Button>X</Button>
          </ContainerButtons>
        </ContainerHeader>
      </Header>
      <BarExpense />
    </>
  );
};

export default EditExpense;
