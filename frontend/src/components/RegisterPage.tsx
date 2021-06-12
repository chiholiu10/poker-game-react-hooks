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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/app/signup", { data }, { headers });
    } catch (error) {
      console.log(error);
    }
    setNameValue("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={emailValue} name="username" type="text" onChange={(e) => getEmail(e.target.value)} />
      <input value={nameValue} name="email" type="text" onChange={(e) => getValue(e.target.value)} />
      <input value={passwordValue} name="password" type="password" onChange={(e) => getPassword(e.target.value)} />
      <button>
        Confirm Name
    </button>
    </form>
  );
};


