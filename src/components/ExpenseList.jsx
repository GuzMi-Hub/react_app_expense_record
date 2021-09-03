import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";
import BarExpense from "./BarExpense";
import useGetExpense from "../hooks/useGetExpense";
import {
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from "../elements/ListElements";

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
      <Lista>
        {expenses.map((expense) => {
          return <ElementoLista>{expense.descripcion}</ElementoLista>;
        })}
      </Lista>
      <BarExpense />
    </>
  );
};

export default ExpenseList;
