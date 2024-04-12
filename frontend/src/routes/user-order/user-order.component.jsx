import React, { useEffect } from "react";
import axios from "axios";
import OrderTable from "../../components/order-table/order-table.component";

const UserOrders = () => {
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5555/orders/my-orders");
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return (
      <>
        <h2 className="my-orders">My Orders</h2>
        <p>You have not placed any orders yet.</p>
      </>
    );
  }

  return (
    <div className="order-container">
      <h2 className="my-orders">My Orders</h2>
      {orders.map((order) => (
        <OrderTable key={order._id} order={order} />
      ))}
    </div>
  );
};

export default UserOrders;