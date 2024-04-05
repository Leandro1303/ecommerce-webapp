import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// STYLES
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
    const { title, image_url, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage
                image_url={image_url}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

DirectoryItem.propTypes = {
    category: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
    }).isRequired,
}

export default DirectoryItem
