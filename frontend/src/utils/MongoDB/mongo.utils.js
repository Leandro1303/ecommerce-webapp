import axios from 'axios';

// URL base de la API para acceder a los endpoints relacionados con la base de datos MongoDB
// const baseURL = 'http://localhost:5555';
export const backendURL = import.meta.env.VITE_BACKEND_URL;

const token = localStorage.getItem('token');

// GET CATEGORIES AND DOCUMENTS
export const getCategoriesAndDocuments = async () => {
  try {
    const response = await axios.get(`${backendURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías y documentos:', error);
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  if (!email || !password) return;

  try {
    const response = await axios.post(`${backendURL}/users/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data.token;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Método para iniciar sesión con correo y contraseña en MongoDB
export const signInWithEmailAndPassword = async ({ email, password }) => {
  if (!email || !password) return;

  try {
    const response = await axios.post(`${backendURL}/users/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión con correo y contraseña:', error);
    throw error;
  }
};

// Método para obtener el usuario actual en MongoDB
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${backendURL}/users/me`, {
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

// Método para crear un documento de usuario en MongoDB
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  try {
    const response = await axios.post(`${backendURL}/users`, {
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
export const createAuthUserWithEmailAndPassword = async (email, password, name) => {
  if (!email || !password) return;

  try {
    const response = await axios.post(`${backendURL}/users`, { email, password, name });
    return response.data;
  } catch (error) {
    console.error('Error al crear el usuario con correo y contraseña:', error);
    throw error;
  }
};

// Método para cerrar sesión de usuario en MongoDB
export const signOutUSer = async () => {
  try {
    await axios.post(
      `${backendURL}/users/logout`,
      null, // El cuerpo de la solicitud está vacío
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error al cerrar sesión de usuario:', error);
    throw error;
  }
};


// ORDERS
// Método para crear una orden en MongoDB
export const createOrder = async (currentUser, cartItems, amount) => {
  try {
    if (!currentUser) {
      console.error("Usuario no encontrado.");
      return;
    }

    const productsData = cartItems.map(item => ({
      name: item.name,
      image: item.image,
      quantity: item.quantity,
      price: item.price
    }));
    console.log(productsData);
    await axios.post(`${backendURL}/orders`, {
      user: currentUser._id,
      products: productsData,
      orderStatus: "pending",
      total: amount,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error al subir la orden:", error);
    throw error;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(
      `${backendURL}/orders/my-orders`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${backendURL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
