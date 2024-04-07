import { useState } from "react";
import { useLocation } from "react-router-dom";

import Button from "../../components/button/button.component";

import {
  Arrow,
  Quantity,
  Value,
} from "../../components/checkout-item/checkout-item.styles";
import "./product.styles.css";

const Product = () => {
  const location = useLocation();
  const data = location.state.data;
  const { description, imageUrl, name, price, quantity } = data;
  const [productQuantity, setProductQuantity] = useState(0);
  const offerPrice = "US$ 25.00";

  console.log(data);

  const addToCart = () => {
    console.log(`Se agregaron: ${productQuantity} del articulo: ${name}`);
  };

  const addItemHandler = () => {
    if (productQuantity <= quantity) {
      setProductQuantity(productQuantity + 1);
    } else {
      console.log("No hay más");
    }
  };

  const removeItemHandler = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <div className="product-container">
      <div className="banner-offer">
        <p className="banner-offer-text">
          {" "}
          <a href="./shop">Free shipping on orders US$ 50+</a>
        </p>
      </div>
      <div className="breadcrumb-navigation">
        <p>
          <a href="./">Home</a>
          &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
          <a href="./shop">Shop</a>
          &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
          <a href="./shop/hats">Hats</a>
        </p>
      </div>
      <div className="row">
        <div className="pictures-container column1">
          <div className="picture-main-cont">
            <img className="picture-main" src={imageUrl} alt="hat-image" />
          </div>
        </div>
        <div className="info-container column2">
          <p className="info-container-name">{name}</p>
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
              {offerPrice} &nbsp;&nbsp;&nbsp;
            </p>
            <p className="info-container-price-before">USD$ {price}</p>
          </div>
          <div className="info-container-quantity">
            <div className="info-container-quantity-value">
              <p className="quantity-value-text">Quantity</p>
              <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{productQuantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
              </Quantity>
            </div>
            <Button onClick={addToCart}>Add to cart</Button>
          </div>
          <br />
          <br />
          <p className="info-container-other">
            ASIN/GTIN: B0BG94N8QQ<br></br>
            Ships from: Warehouse 1<br></br>
            Manufactured by: San Diego Hat Co.
          </p>
        </div>
      </div>
      <div className="description">
        <p className="description-primary">{description}</p>
        <div className="description-secondary-container">
          <p className="description-secondary-text">
            {description}
            -WIDE BRIM QUALITY FEDORA HAT : Measures 3 inch brim size, 22.5
            inches in circumference and 3.5 inch crown height. The brim is wide
            enough to keep you protected from the sun and provide good coverage.
            <br></br>
            <br></br>-FASHION STATEMENT FEDORA : This faux suede fedora makes
            for a great statement hat with a wide and flat brim. The classic
            pinched crown and the wider brim makes it easy to elevate any of
            your outfit.
            <br></br>
            <br></br>-OCCASSION :You can chose to wear this hat during any time
            of the year and any occasion. Be it a brunch date with the girls,
            dinner with family, date night, bridal shower, birthday dinners,
            grocery run , going to the church, pool parties , anything you can
            think of this is a timeless and classic hat that will last for years
            to come.
            <br></br>
            <br></br>-WRAPPED KNOT TRIM DETAIL : The triple wrapped band with
            knot detail adds more chich to the fedora. You will find it very
            easy to style and top off any of your outfit.
            <br></br>
            <br></br>-YOU WILL LOVE IT : Packed with utmost care, 100%
            satisfaction guaranteed with our product. You will love it for many
            years to come.
          </p>
          <div className="description-secondary-picture-cont">
            <img
              className="description-secondary-picture"
              src={imageUrl}
              alt="hat-image-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
