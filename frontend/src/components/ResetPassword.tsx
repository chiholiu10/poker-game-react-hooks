import { FC, useState } from 'react';
import axios from 'axios';

export const ResetPassword: FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const headers = {
    'Content-Type': 'application/json'
  };

  const getEmail = (target: string) => {
    setEmailValue(target);
  };

  const data = {
    email: emailValue
  };
  const resetpassword = async () => {
    try {
      axios.post("http://localhost:8080/app/reset-password", { data }, { headers });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Reset Password
      <input type="text" name="email" onChange={(e) => getEmail(e.target.value)} />
      <button onClick={resetpassword}>Reset</button>
    </div>
  );
};