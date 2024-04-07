import { Fragment } from 'react'
import { useSelector } from 'react-redux'

// SELECTORS
import {
    selectCategoriesIsLoading,
    selectCategoriesMap
} from '../../store/categories/category.selector';

// COMPONENTS
import Spinner from '../../components/spinner/spinner.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    
    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map(category => {
                    const products = categoriesMap[category];
                    return (
                        <CategoryPreview key={category} title={products[0].category} products={products} />
                    )
                })
            )}
        </Fragment>
    )
}

export default CategoriesPreview
