import React from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';
import { useState } from 'react';

const AddProduct = () => {
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState ({
        name : "",
        image: "",
        category: "Hats",
        description:"",
        short_description: "",
        new_price: "" ,
        old_price: "",
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]: e.target.value}) 
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData= new FormData();
        formData.append("product",image);

        await fetch('https://localhost:5555/products',{
            method: "POST",
            headers:{
                Accept: "application/json",
            },
            body:formData,
        }).then((res)=> res.json( )).then((data)=>{responseData=data})

        if(responseData.success)
        {
            product.image = responseData.image_url;
            console.log(product);
        }

    }
    
    
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product name</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Escriba aqui' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Escriba aqui' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Escriba aqui' />
            </div>
            <div className="addproduct-itemfield">
                <p>Description</p>
                <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Escriba aqui' />
            </div>
            <div className="addproduct-itemfield">
                <p>Short Description</p>
                <input value={productDetails.short_description} onChange={changeHandler} type="text" name='short_description' placeholder='Escriba aqui' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler}name="category" className='add-product-selector'>
                <option value="hats">Hats</option>
                <option value="jackets">Jackets</option>
                <option value="sneakers">Sneakers</option>
                <option value="womens">Womens</option>
                <option value="mens">Mens</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image ?URL.createObjectURL(image): upload_area} className='addproduct-image' alt="" />
            </label>
            <input onChange={imageHandler} id="file-input" type="file" name="image" accept=".jpg,.jpeg,.png" hidden/>
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Add Product</button>
    </div>
  )
}

export default AddProduct