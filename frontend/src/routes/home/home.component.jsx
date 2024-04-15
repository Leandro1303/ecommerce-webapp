import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
import ForYouSection from '../../components/for-you-section/for-you-section.component'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
    return (
        <div>
            <Directory />
            <ForYouSection />
            <Outlet />
        </div>
    )
}

export default Home
