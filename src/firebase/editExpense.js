import { db } from "./firebaesConfig";

const editExpense = ({ id, categoria, descripcion, cantidad, fecha }) => {
  return db.collection("gastos").doc(id).update({
    categoria: categoria,
    descripcion: descripcion,
    cantidad: cantidad,
    fecha: fecha,
  });
};

export default editExpense;
