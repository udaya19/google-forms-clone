import { useCallback, useContext, useEffect } from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";

import { AuthContext } from "./context/AuthProvider";

function App() {
  const { user, getUser } = useContext(AuthContext);
  const restoreUser = async () => {
    const token = localStorage.getItem("token");
    await getUser(token);
  };
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      user && restoreUser();
    }
  }, []);
  return <div>{user ? <Home /> : <Login />}</div>;
}

export default App;
