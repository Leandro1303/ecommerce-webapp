// ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      console.log("El usuario no está logueado. Redirigiendo a la página de login.", currentUser);
      navigate('/login', { replace: false });
      return;
    }
    console.log("EL USUARIO ESTÁ LOGEADO. PERMITIENDO ACCESO A LA PÁGINA.", currentUser);
    setTimeout(() => {
      navigate('/', { replace: false });
    }, 5000);
  }, [navigate, currentUser]);

  return children;
}

export default ProtectedRoute;
