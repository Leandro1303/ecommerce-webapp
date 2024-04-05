import DirectoryItem from '../directory-item/directory-item.component.jsx';
import { DirectoryContainer } from './directory.styles.jsx';


const categories = [
    {
        id: 1,
        title: 'HATS',
        image_url: 'https://i.ibb.co/cvpntL1/hats.png',
        route: 'shop/hats'
    },
    {
        id: 2,
        title: 'JACKETS',
        image_url: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: 'shop/jackets'
    },
    {
        id: 3,
        title: 'SNEAKERS',
        image_url: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: 'shop/sneakers'
    },
    {
        id: 4,
        title: 'WOMENS',
        image_url: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: 'shop/womens'
    },
    {
        id: 5,
        title: 'MENS',
        image_url: 'https://i.ibb.co/R70vBrQ/men.png',
        route: 'shop/mens'
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory
