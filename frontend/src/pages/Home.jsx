import React, { useContext } from "react";

import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { logOut } = useContext(AuthContext);
  return <div onClick={logOut}>Logout</div>;
};

export default Home;
