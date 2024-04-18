import { useModal } from "../../context/modal-provider.cotext";
import './edit-product-modal.styles.css'
import InputField from "../input-field/input-field.component";
import { useState, useEffect } from "react";
import axios from 'axios';

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
    try {
      setLoading(true);
      const response = await axios.put(`http://localhost:5555/products/${modalData._id}`, productDetails);

      if (!response.data) {
        throw new Error('Error updating the product');
      }

      closeModal();
      
    } catch (error) {
      console.error('Error updating the product:', error);
    } finally {
      setLoading(false);
    }
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
              label='Offer price'
              value={productDetails.price || ''}
              onChange={handleChange}
              name='price'
              required
            />
            <InputField
              label='Price'
              value={productDetails.old_price || ''}
              onChange={handleChange}
              name='old_price'
              required
            />
            <InputField
              label='Quantity'
              value={productDetails.quantity || ''}
              onChange={handleChange}
              name='quantity'
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
            <button
              type="submit"
              className='addproduct-btn'
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Product'}
            </button>
            <button
              type="button"
              className='cancel-btn'
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;


