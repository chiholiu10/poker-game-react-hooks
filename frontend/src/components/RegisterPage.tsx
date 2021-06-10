import { FC, useState } from "react";
import axios from 'axios';

export const RegisterPage: FC = () => {
  // const [, dispatch] = useContext(Context);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const getValue = (target: string) => {
    setNameValue(target);
  };

  const getEmail = (target: string) => {
    setEmailValue(target);
  };

  const getPassword = (target: string) => {
    setPasswordValue(target);
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  const data = {
    username: nameValue,
    email: emailValue,
    password: passwordValue
  };

  const registration = () => {
    axios.post("http://localhost:8080/backend/signup", { data }, {
      headers
    }).then((response) => {
      console.log(response);
    });
    setNameValue("");
  };

  return (
    <>
      <input value={emailValue} name="username" type="text" onChange={(e) => getEmail(e.target.value)} />
      <input value={nameValue} name="email" type="text" onChange={(e) => getValue(e.target.value)} />
      <input value={passwordValue} name="password" type="password" onChange={(e) => getPassword(e.target.value)} />
      <button onClick={registration}>
        Confirm Name
    </button>
    </>
  );
};


