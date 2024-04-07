import PropTypes from 'prop-types';
import ProductCard from '../product-card/product-card.component';

import {
    CategoryPreviewContainer,
    Title,
    Preview
} from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 3)
                    .map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

CategoryPreview.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
}

export default CategoryPreview;
