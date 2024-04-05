import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Admin from './rutas/Admin/Admin';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Admin />
    </div>
  )
}

export default App
