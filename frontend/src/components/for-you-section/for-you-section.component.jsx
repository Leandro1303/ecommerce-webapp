import { Fragment } from "react";
import './for-you-section.css';
import ForYouCard from "../for-you-card/for-you-card.component";
import { Carousel } from "react-responsive-carousel"
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component";
import { useSelector } from 'react-redux'

const ForYouSection = () => {

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
return (
  <div>
    <h2 className="top-text">Recommended for you</h2>
    <div className="card-container">
      <Carousel autoPlay infiniteLoop emulateTouch showThumbs={false} showStatus={false}>
        {isLoading ? (<Spinner />) : (
          Object.keys(categoriesMap).map((category) => {
            const products = categoriesMap[category];
            const filteredProducts = products.slice(0, 1);
            return (
              <Fragment key={category._id}>
                <h3>{category}</h3> 
                {filteredProducts.map((product) => (
                  <ForYouCard key={product.id} product={product} />
                ))}
              </Fragment>
            );
          })
        )}
      </Carousel>
    </div>
  </div>
);

}
export default ForYouSection