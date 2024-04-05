import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
import ForYouSection from '../../components/for-you-section/for-you-section.component'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <div>
            <Directory />
            <ForYouSection />
            <Outlet />
        </div>
    )
}

export default Home
