import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel"
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from 'react-redux'
import ForYouCard from "../for-you-card/for-you-card.component";
import Spinner from "../spinner/spinner.component";
import './for-you-section.css';

const ForYouSection = () => {

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div>
      <h1 className="top-text">Recommended for you</h1>
      <div className="card-container">
        <Carousel autoPlay infiniteLoop emulateTouch showIndicators={false} showThumbs={false} showStatus={false}>
          {isLoading ? (<Spinner />) : (
            Object.keys(categoriesMap).map((category, index) => {
              const products = categoriesMap[category];
              const filteredProducts = products.slice(0, 1);
              return (
                <Fragment key={index}>
                  <h3>{category}</h3>
                  {filteredProducts.map((product) => (
                    <ForYouCard key={product._id} product={product} />
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