// ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import App from '../../App';

const ProtectedRoute = () => {
  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { replace: false });
      return;
    }
    navigate('/', { replace: false });
  }, [navigate, currentUser]);

  return <App />;
}

export default ProtectedRoute;
