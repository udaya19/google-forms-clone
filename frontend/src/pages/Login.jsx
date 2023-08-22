import React, { useContext, useState } from "react";
import FormData from "form-data";

import { loginApi } from "../api/user";

import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getUser } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("email", email);
      form.append("password", password);
      const result = (await loginApi(form)).data;
      if (result.success) {
        alert(result.message);
        localStorage.setItem("token", result.token);
        await getUser(result.token);
      } else {
        alert(result.error);
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
