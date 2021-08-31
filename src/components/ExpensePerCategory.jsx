import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";

const ExpensePerCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gasto por Categoría</title>
      </Helmet>

      <Header>
        <BackButton />
        <Title> Gastos por Categoría</Title>
      </Header>
    </>
  );
};

export default ExpensePerCategory;
