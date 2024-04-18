import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5555/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const removeOrder = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const token = localStorage.getItem("token");
      try {
        await axios.delete(`http://localhost:5555/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        await fetchOrders();
        Swal.fire({
          icon: "success",
          title: "Order removed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error("Error removing order:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to remove order",
        });
      }
    }
  };

  const renderOrders = () => {
    return orders.map((order) => (
      <div key={order._id} className="order-item">
        <div className="order-header">
          <p>Order ID: {order._id}</p>
          <p>User: {order.user}</p>
          <p>Total: $ {order.total}</p>
          <p>Status: {order.orderStatus}</p>
        </div>
       

        <ul>
          <li>
            <div className="products-head">
              <p>Product</p>
              <p>Image</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
          </li>
        </ul>

        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              <div className="products-data">
                <p>{product.name}</p>
                <p>
                  <img src={product.image} alt="" className="products-image"/>
                </p>
                <p>{product.quantity}</p>
                <p>$ {product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={() => removeOrder(order._id)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="order-list">
      <h2>Order List</h2>
      {orders.length === 0 ? <p>No orders available</p> : renderOrders()}
    </div>
  );
};

export default OrderList;
