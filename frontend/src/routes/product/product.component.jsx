import PropTypes from 'prop-types';

import './product.styles.css';
import { Arrow, Quantity, Value } from '../../components/checkout-item/checkout-item.styles';
import { useState } from 'react';
import Button from '../../components/button/button.component';



const Product = ({ product }) => {

  console.log(product);

  //const { name, price, imageUrl } = product;

const addToCart = () => {console.log(`Se agregaron: ${quantity} del articulo: ${name}`)}

const name = "Womens Faux Suede Wide Brim Floppy Fedora with Wrapped Back Knot Trim [Size: Small]";
const regularPrice ="US$ 35.00";
const offerPrice = "US$ 25.00";
const description = "Wide Brim Fedora is your perfect fashion accessory that you will need to elevate any outfit. Be it a girls night out, brunch with family, bad hair day, grocery run, simply anything under the sun, our faux suede fedora will keep you looking stylish. Made with high quality material, this is a great fedora hat for fall, summer and cold weather. Material: 100% Polyester Estimate head circumference: 22.5 inch /57 cm. Brim width: 3 inch/9 cm Perfect for: fashion styling, bridal showers, birthday parties, brunch date, dinner date, sun hat for outdoor, fall outfits, cold weather, family gatherings, just anything that you can wear a hat to. Package Include: 1 women's fedora hat.";
const shortDescription =
            `-WIDE BRIM QUALITY FEDORA HAT : Measures 3 inch brim size, 22.5 inches in circumference and 3.5 inch crown height. The brim is wide enough to keep you protected from the sun and provide good coverage.
            <br></br><br></br>
            -FASHION STATEMENT FEDORA : This faux suede fedora makes for a great statement hat with a wide and flat brim. The classic pinched crown and the wider brim makes it easy to elevate any of your outfit.
            <br></br><br></br>-OCCASSION :You can chose to wear this hat during any time of the year and any occasion. Be it a brunch date with the girls, dinner with family, date night, bridal shower, birthday dinners, grocery run , going to the church, pool parties , anything you can think of this is a timeless and classic hat that will last for years to come.
            <br></br><br></br>
            
            -WRAPPED KNOT TRIM DETAIL : The triple wrapped band with knot detail adds more chich to the fedora. You will find it very easy to style and top off any of your outfit.
            <br></br><br></br>-YOU WILL LOVE IT : Packed with utmost care, 100% satisfaction guaranteed with our product. You will love it for many years to come.    
`;





  const [quantity, setQuantity] = useState(0);
  const addItemHandler = () => {
    setQuantity(quantity + 1)
  };
  const removeItemHandler = () => {
    setQuantity(quantity - 1)
  };

 return (
    <div className='product-container'>
      

      
      <div className="banner-offer">
          <p className="banner-offer-text"> <a href="./shop">Free shipping on orders US$ 50+</a></p>
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

        <div className="picture-carrusell">
            <img className="picture-carrusell-small" src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image-1" />
            <img className="picture-carrusell-small" src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image-2" />
            <img className="picture-carrusell-small" src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image-3" />
            <img className="picture-carrusell-small" src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image-4" />
            <img className="picture-carrusell-small" src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image-5" />
          </div>

          <div className="picture-main-cont">
            <img className='picture-main' src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image" />
          </div>

        </div>
        
        <div className="info-container column2">
          
          <p className='info-container-name'>
            {name}
          </p>

          <div className="info-container-rating">
            <p className='info-container-rating-text'>
              Rating: &nbsp; 
              <meter className="average-rating" min="0" max="5" value="4.3" title="4.3 out of 5 stars">
                {/* 4.3 out of 5 */}
              </meter>
            </p>
          </div>

          <br></br>

          <div className="info-container-price">
            
            <p className='info-container-price-actual'>
              {offerPrice} &nbsp;&nbsp;&nbsp;
            </p>
            
            <p className="info-container-price-before">
              {regularPrice}
            </p>
          </div>

          <div className="info-container-quantity">
            
            <div className="info-container-quantity-value">
              <p className='quantity-value-text'>Quantity</p>
              <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
              </Quantity>
            </div>

            <Button onClick={addToCart}>
              Add to cart
            </Button>
  
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
      
        <p className='description-primary'>
          {description}
        </p>

        <div className="description-secondary-container">
          <p className='description-secondary-text'>
            {shortDescription}
            -WIDE BRIM QUALITY FEDORA HAT : Measures 3 inch brim size, 22.5 inches in circumference and 3.5 inch crown height. The brim is wide enough to keep you protected from the sun and provide good coverage.
            <br></br><br></br>-FASHION STATEMENT FEDORA : This faux suede fedora makes for a great statement hat with a wide and flat brim. The classic pinched crown and the wider brim makes it easy to elevate any of your outfit.
            <br></br><br></br>-OCCASSION :You can chose to wear this hat during any time of the year and any occasion. Be it a brunch date with the girls, dinner with family, date night, bridal shower, birthday dinners, grocery run , going to the church, pool parties , anything you can think of this is a timeless and classic hat that will last for years to come.
            <br></br><br></br>-WRAPPED KNOT TRIM DETAIL : The triple wrapped band with knot detail adds more chich to the fedora. You will find it very easy to style and top off any of your outfit.
            <br></br><br></br>-YOU WILL LOVE IT : Packed with utmost care, 100% satisfaction guaranteed with our product. You will love it for many years to come.
          </p>    

          <div className="description-secondary-picture-cont">
          <img className="description-secondary-picture" src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt="hat-image-1" />
          </div>
        </div>
      </div>



      <div className="questions-container">

        <h2 className="questions-container-title">Questions</h2>

        <Button>
          Ask a product question
        </Button>

        <div className="questions-container-item">
            
          <p className="question">
            Is this one size fits all?
          </p>
          
          <div className="answer-cont">
            <div className="answer-div">
              <p className="answer">
                -Yes, this is one-size fits all.
              </p>

              <p className="answer">
                -Correct, no need to select size.
              </p>
            </div>
            
            <div className="btn-answer-div">
              <Button className="btn-answer">
                Answer this question
              </Button>
            </div>
            
          </div>

        </div>


        <div className="questions-container-item">
            
            <p className="question">
              The color is strong brown or lighter brown?
            </p>
            
            <div className="answer-cont">
              <div className="answer-div">
                <p className="answer">
                  -Lighter brown.
                </p>
              </div>
              
              <div className="btn-answer-div">
                <Button className="btn-answer">
                  Answer this question
                </Button>
              </div>
              
            </div>
  
        </div>

      </div>



      <div className="reviews-container">
        
        
        <div className="info-container-rating review-scale">
            <p className='info-container-rating-text'>
              Rating: &nbsp; 
              <meter className="average-rating" min="0" max="5" value="4.3" title="4.3 out of 5 stars">
                {/* 4.3 out of 5 */}
              </meter>
            </p>
        </div>


        <Button>
          Write a review
        </Button>


        <div className="reviews-item">
          
        </div>





      </div>


    </div>
  )
}


Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product