import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Swal from "sweetalert2";

import { deleteOrder, getUserById } from "../../utils/MongoDB/MongoDB.utils";

import {
  OrderContainer,
  OrderHeader,
  OrderProductHead,
  OrderProductData,
  OrderProductImage,
  ButtonHolder,
} from './order.styles';
import Button from '../button/button.component';

const Order = ({ order }) => {
  const { _id, user, total, orderStatus, products } = order;
  const [ userInfo, setUserInfo ] = useState({});

  useEffect(() => {
    fetchUserInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await getUserById(user);
      setUserInfo(response);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

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

  return (
    <OrderContainer>
      <OrderHeader>
        <p>Order ID:<br/>{_id}</p>
        <p>User: {userInfo.name} <br/> {userInfo.email} </p>
        <p>Total: ${total}</p>
        <p>Status: {orderStatus}</p>
      </OrderHeader>
     
      <ul>
        <li>
          <OrderProductHead>
            <p>Product</p>
            <p>Image</p>
            <p>Quantity</p>
            <p>Price</p>
          </OrderProductHead>
        </li>
      </ul>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <OrderProductData>
              <p>{product.name}</p>
              <p>
                <OrderProductImage src={product.image} alt="" />
              </p>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
            </OrderProductData>
          </li>
        ))}
      </ul>
      <ButtonHolder>
        <Button
          buttonType="red"
          onClick={() => removeOrder(_id)}
        >
          Remove
        </Button>
        <Button
          buttonType="green"
          onClick={() => removeOrder(_id)}
        >
          Confirm
        </Button>

      </ButtonHolder>
    </OrderContainer>
  );
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
};

export default Order
