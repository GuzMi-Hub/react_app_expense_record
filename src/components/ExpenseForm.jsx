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

const ExpenseForm = () => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputAmount, setinputAmount] = useState("");
  const [category, setCategory] = useState("Hogar");
  const [date, setDate] = useState(new Date());

  const handleOnChange = (e) => {
    if (e.target.name === "description") {
      setInputDescription(e.target.value);
    } else if (e.target.name === "amount") {
      setinputAmount(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputDescription("");
    setinputAmount("");
  };

  console.log(date);

  return (
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
  );
};

export default ExpenseForm;
