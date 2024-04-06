import { useState } from 'react';
import axios from 'axios';
import { bakendURL } from '../../backend';

const AddProducts = () => {
  const [ loading, setLoading ] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    image: '',
    description: '',
    quantity: '',
    price: '',
    old_price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${bakendURL}/productos`, formData);

      if (!response.data) {
        throw new Error('Error al agregar el producto');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image">URL de la Imagen</label>
          <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea name="description" id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Cantidad</label>
          <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="old_price">Precio Anterior</label>
          <input type="number" name="old_price" id="old_price" value={formData.old_price} onChange={handleChange} required />
        </div>
        <button
          type="submit"
          disabled={loading}
        >Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProducts;
