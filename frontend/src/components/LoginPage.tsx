import { FC, useState } from 'react';
import axios from 'axios';

export const Login: FC = () => {
  const [nameValue, setUserName] = useState("");
  const [passwordValue, setPassword] = useState("");
  // const [loginMessage, setLoginMessage] = useState({});

  const getUsername = (username: string) => {
    setUserName(username);
  };

  const getPassword = (password: string) => {
    setPassword(password);
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  const data = {
    username: nameValue,
    password: passwordValue
  };

  const loginUser = async (e: any) => {
    e.preventDefault();
    try {
      const message = await axios.post("http://localhost:8080/app/login", { data }, { headers });
      checkData(message.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkData = (message: string, token?: string) => {
    console.log(message, token);
  };

  return (
    <form onSubmit={loginUser}>
      <input type="text" name="username" onChange={(e) => getUsername(e.target.value)} />
      <input type="password" name="password" onChange={(e) => getPassword(e.target.value)} />
      <button>Login User</button>
      {/* <p>{loginMessage}</p> */}
    </form>
  );
};