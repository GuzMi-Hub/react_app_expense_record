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
import IconCategory from "../elements/IconCategory";
import toCurrency from "../functions/toCurrency";
import { ReactComponent as EditIcon } from "../assets/images/editar.svg";
import { ReactComponent as RemoveIcon } from "../assets/images/borrar.svg";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

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
          return (
            <ElementoLista key={expense.id}>
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
                <BotonAccion>
                  <RemoveIcon />
                </BotonAccion>
              </ContenedorBotones>
            </ElementoLista>
          );
        })}
        <ContenedorBotonCentral>
          <BotonCargarMas>Cargar Más</BotonCargarMas>
        </ContenedorBotonCentral>
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
