import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerButtons,
  ContainerHeader,
} from "./elements/Header";
import Button from "./elements/Button";
import ButtonLogOut from "./components/ButtonLogOut";
import ExpenseForm from "./components/ExpenseForm";
import BarExpense from "./components/BarExpense";

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title> Agregar Gasto</Title>
          <ContainerButtons>
            <Button to="/categorias">Categorías</Button>
            <Button to="lista">Lista de Gastos</Button>
            <ButtonLogOut />
          </ContainerButtons>
        </ContainerHeader>
      </Header>
      <ExpenseForm />
      <BarExpense />
    </>
  );
}

export default App;
