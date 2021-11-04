import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";
import BarExpense from "./BarExpense";
import useGetExpenseOfTheMonthPerCategory from "../hooks/useGetExpenseOfTheMonthPerCategory";
import {
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Valor,
} from "../elements/ListElements";
import toCurrency from "../functions/toCurrency";
import IconCategory from "../elements/IconCategory";

const ExpensePerCategory = () => {
  const expensesPerCategory = useGetExpenseOfTheMonthPerCategory();
  return (
    <>
      <Helmet>
        <title>Gasto por Categoría</title>
      </Helmet>

      <Header>
        <BackButton />
        <Title> Gastos por Categoría</Title>
      </Header>
      <ListaDeCategorias>
        {expensesPerCategory.map((el, index) => {
          return (
            <ElementoListaCategorias key={index}>
              <Categoria>
                <IconCategory id={el.categoria} />
                {el.categoria}
              </Categoria>
              <Valor>{toCurrency(el.cantidad)}</Valor>
            </ElementoListaCategorias>
          );
        })}
      </ListaDeCategorias>
      <BarExpense />
    </>
  );
};

export default ExpensePerCategory;
