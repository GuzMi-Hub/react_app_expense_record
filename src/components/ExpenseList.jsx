import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";
import BarExpense from "./BarExpense";
import useGetExpense from "../hooks/useGetExpense";

const ExpenseList = () => {
  const expenses = useGetExpense();

  return (
    <>
      <Helmet>
        <title>Lista de gastos</title>
      </Helmet>

      <Header>
        <BackButton />
        <Title> Lista de gastos</Title>
      </Header>
      <BarExpense />
    </>
  );
};

export default ExpenseList;
