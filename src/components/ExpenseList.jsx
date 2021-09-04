import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BackButton from "../elements/BackButton";
import BarExpense from "./BarExpense";
import useGetExpenses from "../hooks/useGetExpenses";
import {
  Lista,
  ElementoLista,
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
import IconCategory from "../elements/IconCategory";
import toCurrency from "../functions/toCurrency";
import { ReactComponent as EditIcon } from "../assets/images/editar.svg";
import { ReactComponent as RemoveIcon } from "../assets/images/borrar.svg";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import removeExpense from "../firebase/removeExpense";

const ExpenseList = () => {
  const [expenses, thereAreMoreExpenses, getMoreExpenses] = useGetExpenses();

  const formatDate = (date) => {
    return format(fromUnixTime(date), "dd 'de' MMMM 'del' yyyy", {
      locale: es,
    });
  };

  const dateEquals = (expenses, index, expense) => {
    if (index !== 0) {
      const currentDate = formatDate(expense.fecha);
      const previousExpenseDate = formatDate(expenses[index - 1].fecha);

      if (currentDate === previousExpenseDate) {
        return true;
      } else {
        return false;
      }
    }
  };

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
        {expenses.map((expense, index) => {
          return (
            <div key={expense.id}>
              {!dateEquals(expenses, index, expense) && (
                <Fecha>{formatDate(expense.fecha)}</Fecha>
              )}

              <ElementoLista>
                <Categoria>
                  <IconCategory id={expense.categoria} />
                  {expense.categoria}
                </Categoria>
                <Descripcion>{expense.descripcion}</Descripcion>
                <Valor>{toCurrency(expense.cantidad)}</Valor>
                <ContenedorBotones>
                  <BotonAccion as={Link} to={`/editar/${expense.id}`}>
                    <EditIcon />
                  </BotonAccion>
                  <BotonAccion onClick={() => removeExpense(expense.id)}>
                    <RemoveIcon />
                  </BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          );
        })}

        {thereAreMoreExpenses && (
          <ContenedorBotonCentral>
            <BotonCargarMas onClick={() => getMoreExpenses()}>
              Cargar Más
            </BotonCargarMas>
          </ContenedorBotonCentral>
        )}
        {expenses.length === 0 && (
          <ContenedorSubtitulo>
            <Subtitulo>No hay gastos por mostrar</Subtitulo>
            <Button as={Link} to="/">
              Agregar Gasto
            </Button>
          </ContenedorSubtitulo>
        )}
      </Lista>
      <BarExpense />
    </>
  );
};

export default ExpenseList;
