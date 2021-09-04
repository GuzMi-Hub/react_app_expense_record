import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../firebase/firebaesConfig";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { useAuth } from "../context/AuthContext";

const useGetExpenseOfTheMonth = () => {
  const [expenses, setExpenses] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const START_OF_MONTH = getUnixTime(startOfMonth(new Date()));
    const END_OF_MONTH = getUnixTime(endOfMonth(new Date()));

    if (user) {
      const unSubs = db
        .collection("gastos")
        .orderBy("fecha", "desc")
        .where("fecha", ">=", START_OF_MONTH)
        .where("fecha", "<=", END_OF_MONTH)
        .where("uidUsuario", "==", user.uid)
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        });
      return unSubs;
    }
  }, [user]);

  return [expenses];
};

export default useGetExpenseOfTheMonth;
