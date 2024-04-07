import './AddProduct.css';
import { useEffect, useState } from 'react';
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
    const { name, description, quantity, price, old_price, image } = productDetails;

    useEffect(() => {
        if (image) {
            handleSubmit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);

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
        setLoading(true);
        try {
            if (!imagePath) {
                throw new Error('No image selected');
            }
            const reader = new FileReader();
            reader.readAsDataURL(imagePath);
            reader.onload = async () => {
                try {
                    const url = await uploadImageToFirebase(reader.result);
                    console.log('URL:', url);
                    setProductDetails({
                        ...productDetails,
                        image: url
                    });
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            };
        } catch (error) {
            console.error('Error handling image upload:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            console.log('Product details:', productDetails)
            const response = await axios.post("http://localhost:5555/products", productDetails);
            
            if (!response.data) {
                throw new Error('Error al agregar el producto');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            setLoading(false);
        }
    };

    const submitProduct = async (e) => {
        e.preventDefault();
        try {
            await handleImageUpload();
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    }

    return (
        <div className='add-product'>
            <form onSubmit={submitProduct}>
                <InputField
                    label='Product name'
                    type='text'
                    value={name}
                    onChange={handleChange}
                    name='name'
                    required
                />
                <div className="addproduct-price">
                    <InputField
                        label='Price'
                        type='number'
                        value={price}
                        onChange={handleChange}
                        name='price'
                        required
                    />
                    <InputField
                        label='Offer price'
                        type='number'
                        value={old_price}
                        onChange={handleChange}
                        name='old_price'
                        required
                    />
                    <InputField
                        label='Quantity'
                        type='number'
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
                <button
                    type="submit"
                    className='addproduct-btn'
                    disabled={loading}
                >
                    Add Product
                </button>
            </form>
            <button>Dale para alla</button>
        </div>
    )
}

export default AddProduct