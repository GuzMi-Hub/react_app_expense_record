import { useState, useEffect } from "react";
import { db } from "../firebase/firebaesConfig";
import { useAuth } from "../context/AuthContext";

const useGetExpense = () => {
  const { user } = useAuth();
  const [expense, setExpense] = useState([1, 2, 3]);

  useEffect(() => {
    const unSuscribe = db
      .collection("gastos")
      .where("uidUsuario", "==", user.uid)
      .orderBy("fecha", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        setExpense(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });

    return unSuscribe;
  }, [user]);

  return [expense];
};

export default useGetExpense;
