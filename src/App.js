import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar.js';
import Home from './Home';
import FormularioContato from './formulario/FormularioContato';


function App() {
  return (
    <div className="App">
    <NavBar />

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contato' element={<FormularioContato />} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
