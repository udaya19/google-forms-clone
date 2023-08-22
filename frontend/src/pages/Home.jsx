import React, { useContext, useEffect } from "react";

import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    console.log("User", user);
  }, [user]);
  return <div onClick={logOut}>Logout</div>;
};

export default Home;
