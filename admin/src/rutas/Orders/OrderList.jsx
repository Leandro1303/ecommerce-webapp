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
      try {
        await axios.delete(`http://localhost:5555/orders/${id}`);

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
        <h3>Order ID: {order._id}</h3>
        <p>User: {order.user}</p>
        <p>Total: ${order.total}</p>
        <p>Status: {order.orderStatus}</p>
        <p>Products:</p>
        <ul>
          {order.products.map((product) => (
            <li key={product._id}>{product.product}</li>
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
