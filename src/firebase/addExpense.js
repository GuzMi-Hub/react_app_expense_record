import { db } from "./firebaesConfig";

const addExpense = ({
  categoria,
  descripcion,
  cantidad,
  fecha,
  uidUsuario,
}) => {
  db.collection("gastos").add({
    categoria: categoria,
    descripcion: descripcion,
    cantidad: cantidad,
    fecha: fecha,
    uidUsuario: uidUsuario,
  });
};

export default addExpense;
