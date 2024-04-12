import React from 'react';

const OrderTable = ({ order }) => {
  return (
    <div className="order">
      <div className="order-header">
        <p className="order-header-text">
          Order Placed <br />
          {order.createdAt}
        </p>
        <p className="order-header-text">
          Order # <br />
          {order._id}
        </p>
        <p className="order-header-text">
          Status <br />
          {order.orderStatus}
        </p>
        <p className="order-header-text">
          Ship to <br />
          100ST 500W
        </p>
        <p className="order-header-text">
          Total <br />
          ${order.total}
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="80"
                  height="80"
                />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;