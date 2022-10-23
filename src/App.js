import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import LogIn from "./pages/login";
import Dashboard from "./pages/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import Project from "./pages/Project";
import Edit from "./pages/Edit";


function App() {
  return (
    <>

  

      <Routes>
        <Route  path="/" element={<LogIn />}/>
        <Route  path="/login" element={<LogIn />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route  path="/project" element={<PrivateRoute><Project /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><Edit/></PrivateRoute>} />
      </Routes>
  



    </>
  );
}

export default App;
