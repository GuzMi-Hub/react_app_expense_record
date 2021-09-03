import React, { useState } from "react";
import Button from "../elements/Button";
import {
  FilterContainer,
  Form,
  Input,
  BigInput,
  ButtonContainer,
} from "../elements/FormElements";
import { ReactComponent as IconPlus } from "../assets/images/plus.svg";
import SelectCategory from "./SelectCategory";
import DatePicker from "./DatePicker";
import addExpense from "../firebase/addExpense";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import { useAuth } from "../context/AuthContext";
import Alert from "../elements/Alert";

const ExpenseForm = () => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputAmount, setinputAmount] = useState("");
  const [category, setCategory] = useState("Hogar");
  const [date, setDate] = useState(new Date());
  const [stateAlert, setStateAlert] = useState(false);
  const [alert, setAlert] = useState({});

  const { user } = useAuth();

  const handleOnChange = (e) => {
    if (e.target.name === "description") {
      setInputDescription(e.target.value);
    } else if (e.target.name === "amount") {
      setinputAmount(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputDescription !== "" && inputAmount !== "") {
      let amount = parseFloat(inputAmount).toFixed(2);
      let dateInSeconds = getUnixTime(date);

      addExpense({
        categoria: category,
        descripcion: inputDescription,
        cantidad: amount,
        fecha: dateInSeconds,
        uidUsuario: user.uid,
      })
        .then(() => {
          setStateAlert(true);
          setAlert({ type: "exito", msg: "Gasto agregado exitosamente" });
          setInputDescription("");
          setinputAmount("");
          setDate(new Date());
        })
        .catch((error) => {
          setStateAlert(true);
          setAlert({ type: "error", msg: error });
        });
    } else {
      setStateAlert(true);
      setAlert({ type: "error", msg: "Complete el formulario por favor" });
    }
  };

  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FilterContainer>
          <SelectCategory category={category} setCategory={setCategory} />
          <DatePicker date={date} setDate={setDate} />
        </FilterContainer>
        <div>
          <Input
            type="text"
            name="description"
            placeholder="Descripción"
            value={inputDescription}
            onChange={handleOnChange}
          />
          <BigInput
            type="number"
            name="amount"
            placeholder="$0.00"
            min="0"
            step=".00001"
            value={inputAmount}
            onChange={handleOnChange}
          />
        </div>
        <ButtonContainer>
          <Button as="button" primario conIcono type="submit">
            Agregar Gasto
            <IconPlus />
          </Button>
        </ButtonContainer>
      </Form>
      <Alert
        type={alert.type}
        msg={alert.msg}
        setStateAelert={setStateAlert}
        stateAlert={stateAlert}
      />
    </>
  );
};

export default ExpenseForm;
