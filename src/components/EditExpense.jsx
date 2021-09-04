import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";
import BarExpense from "./BarExpense";
import ExpenseForm from "./ExpenseForm";
import { useParams } from "react-router";
import useGetExpense from "../hooks/useGetExpense";

const EditExpense = () => {
  const { id } = useParams();

  const [expense] = useGetExpense(id);

  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <BackButton ruta="/lista" />
        <Title> Editar Gasto</Title>
      </Header>
      <ExpenseForm expense={expense} />
      <BarExpense />
    </>
  );
};

export default EditExpense;
