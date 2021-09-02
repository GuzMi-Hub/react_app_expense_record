import React from "react";

import { ReactComponent as IconFood } from "../assets/images/cat_comida.svg";
import { ReactComponent as IconShopping } from "../assets/images/cat_compras.svg";
import { ReactComponent as IconCuentasYPagos } from "../assets/images/cat_cuentas-y-pagos.svg";
import { ReactComponent as IconFunny } from "../assets/images/cat_diversion.svg";
import { ReactComponent as IconHome } from "../assets/images/cat_hogar.svg";
import { ReactComponent as IconClothe } from "../assets/images/cat_ropa.svg";
import { ReactComponent as IconHealth } from "../assets/images/cat_salud-e-higiene.svg";
import { ReactComponent as IconTransport } from "../assets/images/cat_transporte.svg";

const IconCategory = ({ id }) => {
  switch (id) {
    case "comida":
      return <IconFood />;
    case "compras":
      return <IconShopping />;
    case "cuentas y pagos":
      return <IconCuentasYPagos />;
    case "diversion":
      return <IconFunny />;
    case "hogar":
      return <IconHome />;
    case "ropa":
      return <IconClothe />;
    case "salud e higiene":
      return <IconHealth />;
    case "transporte":
      return <IconTransport />;
    default:
      return null;
  }
};

export default IconCategory;
