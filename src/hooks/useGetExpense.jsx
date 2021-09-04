import { useState, useEffect } from "react";
import { db } from "../firebase/firebaesConfig";
import { useHistory } from "react-router";

const useGetExpense = (id) => {
  const [expense, setExpense] = useState("");
  const history = useHistory();

  useEffect(() => {
    db.collection("gastos")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setExpense(doc);
        } else {
          history.push("/lista");
        }
      });
  }, [history, id]);

  return [expense];
};

export default useGetExpense;
