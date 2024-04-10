import axios from 'axios';

// URL base de la API para acceder a los endpoints relacionados con la base de datos MongoDB
const baseURL = 'http://localhost:5555';

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
      uid: userAuth.uid,
      displayName: userAuth.displayName,
      email: userAuth.email,
      createdAt: new Date(),
      ...additionalInformation,
    });
    return response.data;
  } catch (error) {
    console.error('Error al crear el documento de usuario:', error);
    throw error;
  }
};

// Método para crear un usuario con correo y contraseña en MongoDB
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const response = await axios.post(`${baseURL}/users/signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error al crear el usuario con correo y contraseña:', error);
    throw error;
  }
};

// Método para iniciar sesión con correo y contraseña en MongoDB
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const response = await axios.post(`${baseURL}/users/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión con correo y contraseña:', error);
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

// Método para obtener el usuario actual en MongoDB
export const getCurrentUSer = async () => {
  try {
    const response = await axios.get(`${baseURL}/users/me`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario actual:', error);
    throw error;
  }
};
