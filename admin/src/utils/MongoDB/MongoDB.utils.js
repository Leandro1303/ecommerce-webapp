import axios from 'axios';

// URL base de la API para acceder a los endpoints relacionados con la base de datos MongoDB
const baseURL = 'http://localhost:5555';
export const bakendURL = "https://ecommerce-webapp-backend.onrender.com"

export const loginUser = async (credentials) => {
  if (!credentials) return;

  try {
    const response = await axios.post("http://localhost:5555/users/login", credentials);
    localStorage.setItem('token', response.data.token);
    return response.data.token;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Método para iniciar sesión con correo y contraseña en MongoDB
export const signInWithEmailAndPassword = async (credentials) => {
  if (!credentials) return;

  try {
    const response = await axios.post(`${baseURL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión con correo y contraseña:', error);
    throw error;
  }
};

// Método para obtener el usuario actual en MongoDB
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${baseURL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario actual:', error);
    throw error;
  }
};

// Método para obtener categorías y documentos desde MongoDB
export const getCategoriesAndDocuments = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías y documentos:', error);
    throw error;
  }
};

// Método para crear un documento de usuario en MongoDB
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  try {
    const response = await axios.post(`${baseURL}/users`, {
      _id: userAuth._id,
      name: userAuth.name,
      email: userAuth.email,
      ...additionalInformation,
    });
    return response.data;
  } catch (error) {
    console.error('Error al crear el documento de usuario:', error);
    throw error;
  }
};

// Método para crear un usuario con correo y contraseña en MongoDB
export const createAuthUserWithEmailAndPassword = async (credentials) => {
  if (!credentials) return;

  try {
    const response = await axios.post(`${baseURL}/users`, { credentials });
    return response.data;
  } catch (error) {
    console.error('Error al crear el usuario con correo y contraseña:', error);
    throw error;
  }
};


// Método para cerrar sesión de usuario en MongoDB
export const signOutUSer = async () => {
  try {
    await axios.post(`${baseURL}/users/logout`);
  } catch (error) {
    console.error('Error al cerrar sesión de usuario:', error);
    throw error;
  }
};
