import React from 'react';
import './App.css';
import LoginForm from './Components/Login/LoginForm.js';
import Piano from './Components/Piano/Piano.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home/Home.js';
import Register from './Pages/Register/Register.js';
// Import other pages you have created

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/piano/create" element={<Piano mode="create"/>} />
        <Route path="/register" element={<Register/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
