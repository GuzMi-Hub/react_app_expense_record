import { useState, useEffect } from "react";
import { db } from "../firebase/firebaesConfig";
import { useAuth } from "../context/AuthContext";

const useGetExpenses = () => {
  const { user } = useAuth();
  const [expense, setExpense] = useState([]);
  const [lastExpense, setLastExpense] = useState(null);
  const [thereAreMoreExpenses, setThereAreMoreExpenses] = useState(false);

  const getMoreExpenses = () => {
    db.collection("gastos")
      .where("uidUsuario", "==", user.uid)
      .orderBy("fecha", "desc")
      .limit(10)
      .startAfter(lastExpense)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
          setExpense(
            expense.concat(
              snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              })
            )
          );
        } else {
          setThereAreMoreExpenses(false);
        }
      });
  };

  useEffect(() => {
    const unSuscribe = db
      .collection("gastos")
      .where("uidUsuario", "==", user.uid)
      .orderBy("fecha", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
          setThereAreMoreExpenses(true);
        } else {
          setThereAreMoreExpenses(false);
        }

        setExpense(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });

    return unSuscribe;
  }, [user]);

  return [expense, thereAreMoreExpenses, getMoreExpenses];
};

export default useGetExpenses;
