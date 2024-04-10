import {
  createContext,
  useState,
  useContext,
  useEffect
} from 'react';

import PropTypes from 'prop-types';

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("" || null);
  
  const authToken = async (token) => {
    if (token) {
      setUser(token);
    }
    console.log("El TOKEN en authToken: ", token);
  }
  
  useEffect(() => {
    console.log("El USER en authToken: ", user);
  }, [user]);

  const contextValue = {
    user,
    setUser,
    authToken,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};


AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
  isSignedIn: PropTypes.bool,
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
