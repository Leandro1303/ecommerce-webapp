import Navbar from "./componentes/Navbar/Navbar";
import Admin from "./rutas/Admin/Admin";
import EditProductModal from "./componentes/EditProductModal/edit-product-modal.component";
import "./App.css";
import Authentication from "./rutas/authentication/authentication.component";

const App = () => {
  const condicion = false;
  if (condicion) {
    return (
      <div className="app">
        <Navbar />
        <Admin />
        <EditProductModal />
      </div>
    );
  } else {
    return <Authentication />;
  }
};

export default App;
