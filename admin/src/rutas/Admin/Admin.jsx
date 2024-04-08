import "./Admin.css";
import Sidebar from "../../componentes/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../rutas/AddProduct/AddProduct";
import ListProduct from "../../rutas/ListProcuct/ListProduct";
import OrderList from "../../rutas/Orders/OrderList";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/orderlist" element={<OrderList />} />
      </Routes>
    </div>
  );
};

export default Admin;
