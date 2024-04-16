import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderTable from "../../components/order-table/order-table.component";
import Spinner from "../../components/spinner/spinner.component";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:5555/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
    setTimeout (() => setLoading(false), 1500); 
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
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="order-container">
          <h2 className="my-orders">My Orders</h2>
          {orders.map((order) => (
            <OrderTable key={order._id} order={order} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserOrders;
