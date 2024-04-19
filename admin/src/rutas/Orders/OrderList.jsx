import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { deleteOrder, getOrders } from "../../utils/MongoDB/MongoDB.utils";

import Spinner from "../../componentes/spinner/spinner.component";

import "./OrderList.css";

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
        await deleteOrder(id);

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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {orders.length === 0 ? <p>No orders available</p> : renderOrders()}
        </>
      )}
    </div>
  );
};

export default OrderList;
