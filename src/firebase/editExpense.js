import { db } from "./firebaesConfig";

const editExpense = ({ id, categoria, descripcion, cantidad, fecha }) => {
  return db
    .collection("gastos")
    .doc(id)
    .add({
      categoria: categoria,
      descripcion: descripcion,
      cantidad: Number(cantidad),
      fecha: fecha,
    });
};

export default editExpense;
