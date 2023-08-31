import { useContext, useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./pages/Form";

import { AuthContext } from "./context/AuthProvider";

function App() {
  const [loading, setLoading] = useState(true);
  const { user, getUser } = useContext(AuthContext);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    const restoreUser = async () => {
      await getUser(token);
      setLoading(false);
    };
    token ? restoreUser() : setLoading(false);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Home />} />
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/forms/:id" element={user ? <Form /> : <Login />} />
    </Routes>
  );
}

export default App;
