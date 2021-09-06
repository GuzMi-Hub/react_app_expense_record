import { useState, useEffect } from "react";
import useGetExpenseOfTheMonth from "./useGetExpenseOfTheMonth";

const useGetExpenseOfTheMonthPerCategory = () => {
  const [expensePerCategory, setExpensePerCategory] = useState([]);
  const expenses = useGetExpenseOfTheMonth();

  useEffect(() => {
    const sumExpenses = expenses.reduce(
      (resultingObject, currentObject) => {
        const currentCategory = currentObject.categoria;
        const currentAmount = currentObject.cantidad;

        resultingObject[currentCategory] += currentAmount;

        return resultingObject;
      },
      {
        "comida": 0,
        "cuentas y pagos": 0,
        "hogar": 0,
        "transporte": 0,
        "ropa": 0,
        "salud e higiene": 0,
        "compras": 0,
        "diversion": 0,
      }
    );

    setExpensePerCategory(
      Object.keys(sumExpenses).map((element) => {
        return { categoria: element, cantidad: sumExpenses[element] };
      })
    );
  }, [expenses, setExpensePerCategory]);

  return expensePerCategory;
};

export default useGetExpenseOfTheMonthPerCategory;
