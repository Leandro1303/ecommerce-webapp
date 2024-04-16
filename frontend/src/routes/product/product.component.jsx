import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import { Link, useLocation } from "react-router-dom";

import Button from "../../components/button/button.component";

import "./product.styles.css";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner.component";




const Product = () => {
  const location = useLocation();


  const id = location.state.data._id;
  // const [id, setId] = useState("");
  console.log("Location state data id:     " + location.state.data._id);
  
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

   
  
  // setState(() => ({ 
  //   id: location.state.data._id
  //   // console.log("setState    " + location.state.data._id);  
  //   }))

  useEffect(() => {
    fetchData();
    // setId(location.state.data._id);
    // console.log("useEffect setId #1    " + location.state.data._id);
    // console.log("useEffect setId #2    " + location.state.data._id);

  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5555/products/${id}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const product = data;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addToCart = () => {
    dispatch(addItemToCart(cartItems, product));

    console.log("Click en Agregar al carrito" + "--cartItems--" + cartItems + "--product--" + product);
    console.log(product);
    console.log(cartItems);
  };

  if (loading && data === null) {
    return <Spinner />;
  } else {
    return (
      <div className="product-container">
        <div className="banner-offer">
          <p className="banner-offer-text">
            {" "}
            <a href="./shop">
              Free shipping on orders US$ 50+ 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              New Feature: Modify quantities in the cart!
            </a>
          </p>
        </div>
        <div className="breadcrumb-navigation">
          <p>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
            <Link to="/shop">Shop</Link>
            &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
            <Link to={`/shop/${data.category}`}>{data.category}</Link>
          </p>
        </div>
        <div className="row">
          <div className="pictures-container column1">
            <div className="picture-main-cont">
              <img className="picture-main" src={data.image} alt={data.name} />
            </div>
          </div>
          <div className="info-container column2">
            <p className="info-container-name">{data.name}</p>
            <div className="info-container-rating">
              <p className="info-container-rating-text">
                Rating: &nbsp;
                <meter
                  className="average-rating"
                  min="0"
                  max="5"
                  value="4.3"
                  title="4.3 out of 5 stars"
                >
                  {/* 4.3 out of 5 */}
                </meter>
              </p>
            </div>
            <br></br>
            <div className="info-container-price">
              <p className="info-container-price-actual">
                $ {data.price} &nbsp;&nbsp;&nbsp;
              </p>
              <p className="info-container-price-before">
                $ {data.old_price}
              </p>
            </div>
            <div className="info-container-quantity">
              <Button onClick={addToCart}>Add to cart</Button>
            </div>
            <br />
            <br />
            <p className="info-container-other">
              ASIN/GTIN: B0BG94N8QQ<br></br>
              Ships from: Warehouse 1<br></br>
              Manufactured by: San Diego Co.
            </p>
          </div>
        </div>
        <div className="description">
          <p className="description-primary">{data.description}</p>
          <div className="description-secondary-container">
            <p className="description-secondary-text">{data.description}</p>
            <div className="description-secondary-picture-cont">
              <img
                className="description-secondary-picture"
                src={data.image}
                alt="hat-image-1"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Product;
