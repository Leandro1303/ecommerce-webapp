import { useEffect, useState } from "react";
import OrderTable from "../../components/order-table/order-table.component";
import Spinner from "../../components/spinner/spinner.component";
import { fetchOrders } from "../../utils/MongoDB/mongo.utils";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const response = await fetchOrders();
        setOrders(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyOrders();
    setTimeout(() => setLoading(false), 1250);
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {orders.length != 0 ? (
        <div className="order-container">
          <h2 className="my-orders">My Orders</h2>
          {orders.map((order) => (
            <OrderTable key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <>
          <h2 className="my-orders">My Orders</h2>
          <p>You have not placed any orders yet.</p>
        </>
      )}
    </>
  );
};

export default UserOrders;
