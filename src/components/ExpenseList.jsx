import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";

const ExpenseList = () => {
  return (
    <>
      <Helmet>
        <title>Lista de gastos</title>
      </Helmet>

      <Header>
        <BackButton />
        <Title> Lista de gastos</Title>
      </Header>
    </>
  );
};

export default ExpenseList;
