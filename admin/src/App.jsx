import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Admin from "./rutas/Admin/Admin";
import EditProductModal from "./componentes/EditProductModal/edit-product-modal.component";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Admin />
      <EditProductModal />
    </div>
  );
};

export default App;
