import React, { useContext, useState, useEffect } from "react";
import useGetExpenseOfTheMonth from "../hooks/useGetExpenseOfTheMonth";

const TotalSpentContext = React.createContext();

const useTotalByMonth = () => useContext(TotalSpentContext);

const TotalSpentProvider = ({ children }) => {
  const [total, setTotal] = useState(7);
  const expensesByMonth = useGetExpenseOfTheMonth();

  useEffect(() => {
    let accumulated = 0;
    expensesByMonth.forEach((expense) => {
      accumulated += expense.cantidad;
    });
    setTotal(accumulated);
  }, [expensesByMonth]);

  return (
    <TotalSpentContext.Provider value={{ total: total }}>
      {children}
    </TotalSpentContext.Provider>
  );
};

export { TotalSpentProvider, useTotalByMonth };
