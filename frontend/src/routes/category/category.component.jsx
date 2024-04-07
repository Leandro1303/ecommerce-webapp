import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// COMPONENTS
import ProductCard from '../../components/product-card/product-card.component.jsx'
import Spinner from '../../components/spinner/spinner.component.jsx';

// REDUX
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector.js';

// STYLES
import {
  CategoryContainer,
  Title
} from './category.styles.jsx'

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  )
}

export default Category;
