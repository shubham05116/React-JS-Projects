import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLogged, setLogged] = useState(false);

  return (
    <div className="App h-screen w-screen flex flex-col bg-slate-950 overflow-x-hidden  ">
      <Navbar isLogged={isLogged} setLogged={setLogged} />

      <Routes>
        <Route path="/" element={<Home isLogged={isLogged} />} />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/signUp" element={<SignUp setLogged={setLogged} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLogged={isLogged}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
