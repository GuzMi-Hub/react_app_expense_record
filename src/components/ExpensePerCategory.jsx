import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";
import BarExpense from "./BarExpense";
import useGetExpenseOfTheMonthPerCategory from "../hooks/useGetExpenseOfTheMonthPerCategory";

const ExpensePerCategory = () => {
  const expensesPerCategory = useGetExpenseOfTheMonthPerCategory();
  console.log(expensesPerCategory);
  return (
    <>
      <Helmet>
        <title>Gasto por Categoría</title>
      </Helmet>

      <Header>
        <BackButton />
        <Title> Gastos por Categoría</Title>
      </Header>
      <BarExpense />
    </>
  );
};

export default ExpensePerCategory;
