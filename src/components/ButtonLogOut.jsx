import React from "react";
import { ReactComponent as IconLogOut } from "../assets/images/log-out.svg";
import Button from "../elements/Button";
import { auth } from "../firebase/firebaesConfig";
import { useHistory } from "react-router";

const ButtonLogOut = () => {
  const history = useHistory();

  const logOut = async () => {
    try {
      await auth.signOut();
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button iconoGrande as="button" onClick={logOut}>
      <IconLogOut />
    </Button>
  );
};

export default ButtonLogOut;
