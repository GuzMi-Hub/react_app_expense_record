import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contenedor from "./elements/container";
import Login from "./components/Login";
import Register from "./components/Register";
import EditExpense from "./components/EditExpense";
import ExpenseList from "./components/ExpenseList";
import ExpensePerCategory from "./components/ExpensePerCategory";
import favicon from "./assets/images/logo.png";
import Fondo from "./elements/Fondo";

WebFont.load({
  google: {
    families: ["Work Sans: 400,500,700", "Droid Serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <title>AppGastos</title>
      </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/categorias" component={ExpensePerCategory} />
            <Route path="/lista" component={ExpenseList} />
            <Route path="/editar/:id" component={EditExpense} />
            <Route path="/" exact={true} component={App} />
          </Switch>
        </Contenedor>
      </BrowserRouter>
      <Fondo />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
