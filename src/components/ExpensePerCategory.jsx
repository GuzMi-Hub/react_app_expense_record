import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerButtons,
  ContainerHeader,
} from "../elements/Header";
import Button from "../elements/Button";

const ExpensePerCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gasto por Categoría</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title> Gastos por Categoría</Title>
        </ContainerHeader>
      </Header>
    </>
  );
};

export default ExpensePerCategory;
