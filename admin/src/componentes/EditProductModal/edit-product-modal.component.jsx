import { useState, useEffect } from "react";

import { useModal } from "../../context/modal-provider.cotext";
import { updateProduct } from "../../utils/MongoDB/MongoDB.utils";

import InputField from "../input-field/input-field.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import './edit-product-modal.styles.css'

const categories = [
  { id: 'Hats', name: 'Hats' },
  { id: 'Jackets', name: 'Jackets' },
  { id: 'Sneakers', name: 'Sneakers' },
  { id: 'womens', name: 'Womens' },
  { id: 'Womens', name: 'Mens' }
];

const EditProductModal = () => {
  const [loading, setLoading] = useState(false);
  const { modalVisible, modalData, closeModal } = useModal();
  const [initialProductDetails, setInitialProductDetails] = useState({});
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    setInitialProductDetails({ ...modalData });
    setProductDetails({ ...modalData });
  }, [modalData]);

  if (!modalVisible) {
    return null
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await updateProduct(modalData._id, productDetails);

      if (!response.data) {
        throw new Error('Error updating the product');
      }

      closeModal();

    } catch (error) {
      console.error('Error updating the product:', error);
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setProductDetails({ ...initialProductDetails });
    closeModal();
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <InputField
            label='Product name'
            value={productDetails.name || ''}
            onChange={handleChange}
            name='name'
            required
          />
          <div className="addproduct-price">
            <InputField
              label="Offer price"
              type="number"
              value={`${productDetails.price}`} // Convertir a string temporalmente para mostrar en el campo
              onChange={handleChange}
              name="price"
              required
            />
            <InputField
              label="Price"
              type="number"
              value={`${productDetails.old_price}`} // Convertir a string temporalmente para mostrar en el campo
              onChange={handleChange}
              name="old_price"
              required
            />
            <InputField
              label="Quantity"
              type="number"
              value={`${productDetails.quantity}`} // Convertir a string temporalmente para mostrar en el campo
              onChange={handleChange}
              name="quantity"
              required
            />

          </div>
          <div className="addproduct-itemfield">
            <p>Description</p>
            <input
              value={productDetails.description || ''}
              onChange={handleChange}
              type="text"
              name='description'
              placeholder='Escriba aqui'
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select
              value={productDetails.category || ''}
              onChange={handleChange}
              name="category"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="button-container">
            <Button
              type="submit"
              buttonType={BUTTON_TYPE_CLASSES.green}
              isLoading={loading}
            >
              Update Product
            </Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.red}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;


