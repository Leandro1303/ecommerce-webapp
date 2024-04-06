import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:5555/products')
    .then(res => res.json())
    .then((data)=> { setAllProducts (data) });
  }

  useEffect (()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch(`http://localhost:5555/products/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Offer Price</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <> <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.imageURL} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>${product.old_price}</p>
            <p>{product.quantity}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product._id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
            {/* crear btn editar */}
          </div>
          <hr />
          </>
          
        })}
      </div>
    </div>
  )
}

export default ListProduct