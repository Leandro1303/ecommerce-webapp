import './AddProduct.css';
import { useState } from 'react';
import axios from 'axios';
import InputField from '../input-field/input-field.component';
import { uploadImageToFirebase } from '../../utils/firebase';
// import { bakendURL } from '../../backend';

const defaultProduct = {
    category: "Hats",
    name: "",
    image: "",
    description: "",
    quantity: "",
    price: "",
    old_price: ""
};

const categories = [
    { id: 'Hats', name: 'Hats' },
    { id: 'Jackets', name: 'Jackets' },
    { id: 'Sneakers', name: 'Sneakers' },
    { id: 'womens', name: 'Womens' },
    { id: 'Womens', name: 'Mens' }
];

const AddProduct = () => {
    const [imagePath, setImagePath] = useState(null);
    const [loading, setLoading] = useState(false);
    const [productDetails, setProductDetails] = useState(defaultProduct)
    const { name, description, quantity, price, old_price } = productDetails;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setImagePath(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        try {
            const url = await uploadImageToFirebase(imagePath);

            // Actualizar el objeto defaultProduct con la URL de la imagen
            console.log('URL:', url);
            setProductDetails({
                ...defaultProduct,
                image: url
            });

            console.log('Image uploaded and URL:', url);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            handleImageUpload();
            setLoading(true);
            const response = await axios.post("http://localhost:5555/productos", productDetails);

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
        <div className='add-product'>
            <form onSubmit={handleSubmit}>
                <InputField
                    label='Product name'
                    value={name}
                    onChange={handleChange}
                    name='name'
                    required
                />
                <div className="addproduct-price">
                    <InputField
                        label='Price'
                        value={price}
                        onChange={handleChange}
                        name='price'
                        required
                    />
                    <InputField
                        label='Offer price'
                        value={old_price}
                        onChange={handleChange}
                        name='old_price'
                        required
                    />
                    <InputField
                        label='Quantity'
                        value={quantity}
                        onChange={handleChange}
                        name='quantity'
                        required
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Description</p>
                    <input value={description} onChange={handleChange} type="text" name='description' placeholder='Escriba aqui' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Category</p>
                    <select>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <InputField
                    label=''
                    onChange={handleImageChange}
                    name='image'
                    required
                    type='file'
                    accept='jpg, jpeg, png'
                    hidden
                />
            </form>
            <button
                type="submit"
                className='addproduct-btn'
                disabled={loading}
            >Add Product</button>
        </div>
    )
}

export default AddProduct