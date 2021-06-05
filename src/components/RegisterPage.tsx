import { FC, useContext, useState } from "react";
import { Context } from "../Store";

export const RegisterPage: FC = () => {
  const [, dispatch] = useContext(Context);
  const [nameValue, setNameValue] = useState("");
  const getValue = (target: string) => {
    setNameValue(target);
  };

  const addPlayerName = () => {
    dispatch({ type: "addName", name: nameValue });
    setNameValue("");
  };

  return (
    <>
      <input value={nameValue} onChange={(e) => getValue(e.target.value)} />
      <button onClick={addPlayerName}>
        Confirm Name
      </button>
    </>
  );
};


