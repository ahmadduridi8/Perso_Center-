import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Perso from './components/Perso';

function App() {
  return (
    <>
      <NavBar/>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Perso" element={<Perso />} />
      </Routes>
    </>
  );
}

export default App;
