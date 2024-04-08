import React from "react";
import cross_icon from "../../assets/cross_icon.png";
import edit_icon from "../../assets/edit_icon.svg";
import { useModal } from "../../context/modal-provider.cotext";
import Swal from "sweetalert2";
import "./product-field.styles.css";

const ProductField = ({ allproducts, removeProduct }) => {
  const { openModal } = useModal();

  const handleRemoveProduct = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(productId);
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled");
      }
    });
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Offer Price</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Category</p>
        <p>Remove</p>
        <p>Edit</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="listproduct-format-main listproduct-format"
          >
            <img
              src={product.image}
              alt=""
              className="listproduct-product-icon"
            />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>${product.old_price}</p>
            <p>{product.quantity}</p>
            <p>{product.category}</p>
            <img
              onClick={() => handleRemoveProduct(product._id)}
              className="listproduct-remove-icon"
              src={cross_icon}
              alt="Remove"
            />
            <img
              onClick={() => openModal(product)}
              className="listproduct-remove-icon"
              src={edit_icon}
              alt="Edit"
            />
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default ProductField;
