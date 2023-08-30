import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./pages/Form";

import { AuthContext } from "./context/AuthProvider";

function App() {
  const { user, getUser } = useContext(AuthContext);
  const restoreUser = async () => {
    const token = localStorage.getItem("token");
    await getUser(token);
  };
  useEffect(() => {
    user && restoreUser();
  }, []);
  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Home />} />
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/forms/:id" element={user ? <Form /> : <Login />} />
    </Routes>
  );
}

export default App;
