import { db } from "./firebaesConfig";

const removeExpense = (id) => {
  db.collection("gastos").doc(id).delete();
};

export default removeExpense;
