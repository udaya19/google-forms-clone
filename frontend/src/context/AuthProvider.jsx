import React, { createContext, useState } from "react";

import { getUserProfile } from "../api/user";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const getUser = async (token) => {
    const result = (await getUserProfile(token)).data;
    console.log(result);
    setUser(result.user);
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
    window.location.reload(true);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, getUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
