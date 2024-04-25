import { useEffect, useState } from "react";

import { getOrders } from "../../utils/MongoDB/MongoDB.utils";

import Spinner from "../../componentes/spinner/spinner.component";

import "./OrderList.css";
import Order from "../../componentes/order/order.component";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="order-list">
      <h2 className="title">Order List</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {orders.length === 0 ? (
            <p>No orders available</p>
          ) : (
            <>
              {orders.map((order) => (
                <Order key={order._id} order={order} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default OrderList;
