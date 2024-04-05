import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product name</p>
            <input type="text" name="name" placeholder='Escriba aqui' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input type="text" name='old_price' placeholder='Escriba aqui' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer price</p>
                <input type="text" name='new_price' placeholder='Escriba aqui' />
            </div>
            <div className="addproduct-itemfield">
                <p>Description</p>
                <input type="text" name='description' placeholder='Escriba aqui' />
            </div>
            <div className="addproduct-itemfield">
                <p>Short description</p>
                <input type="text" name='short description' placeholder='Escriba aqui' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name="category" className='add-product-selector'>
                <option value="hats">Hats</option>
                <option value="jackets">Jackets</option>
                <option value="sneakers">Sneakers</option>
                <option value="womens">Womens</option>
                <option value="mens">Mens</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={upload_area} className='addproduct-image' alt="" />
            </label>
            <input id="file-input" type="file" name="image" accept=".jpg,.jpeg,.png" hidden/>
        </div>
        <button className='addproduct-btn'>Add Product</button>
    </div>
  )
}

export default AddProduct