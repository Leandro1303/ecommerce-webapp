import Proptypes from "prop-types";
import remove from "../../assets/trash-can-solid.svg";
import edit_icon from "../../assets/pen-to-square-solid.svg";
import { useModal } from "../../context/modal-provider.cotext";
import Swal from "sweetalert2";
import "./product-field.styles.css";
import Spinner from "../spinner/spinner.component";

const ProductField = ({ allproducts, loading, removeProduct }) => {
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="table-container">
          <table className="listproduct-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Offer Price</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Remove</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {allproducts.map((product, index) => (
                <tr key={index}>
                  <td><img src={product.image} alt="" className="listproduct-product-icon" /></td>
                  <td>{product.name}</td>
                  <td>$ {product.price}</td>
                  <td>$ {product.old_price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td><img onClick={() => handleRemoveProduct(product._id)} className="listproduct-icon" src={remove} alt="Remove" /></td>
                  <td><img onClick={() => openModal(product)} className="listproduct-icon" src={edit_icon} alt="Edit" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

ProductField.propTypes = {
  allproducts: Proptypes.array.isRequired,
  loading: Proptypes.bool.isRequired,
  removeProduct: Proptypes.func.isRequired,
};

export default ProductField;
