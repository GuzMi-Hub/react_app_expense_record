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
import { AuthProvider } from "./context/AuthContext";
import PrivteRoute from "./components/PrivateRoute";
import { TotalSpentProvider } from "./context/TotalSpentForTheMontContext";


console.log(process.env.REACT_APP_FIREBASE_API_KEY);

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
      <AuthProvider>
        <TotalSpentProvider>
          <BrowserRouter>
            <Contenedor>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivteRoute path="/editar/:id">
                  <EditExpense />
                </PrivteRoute>
                <PrivteRoute path="/lista">
                  <ExpenseList />
                </PrivteRoute>
                <PrivteRoute path="/categorias">
                  <ExpensePerCategory />
                </PrivteRoute>
                <PrivteRoute path="/" exact={true}>
                  <App />
                </PrivteRoute>
              </Switch>
            </Contenedor>
          </BrowserRouter>
        </TotalSpentProvider>
      </AuthProvider>
      <Fondo />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
