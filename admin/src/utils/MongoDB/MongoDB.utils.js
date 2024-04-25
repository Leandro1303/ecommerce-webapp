import axios from 'axios';

// URL base de la API para acceder a los endpoints relacionados con la base de datos MongoDB
// const baseURL = 'http://localhost:5555';
export const backendURL = import.meta.env.VITE_BACKEND_URL;
const token = localStorage.getItem("token");

// USER CRUD
export const loginUser = async (credentials) => {
  if (!credentials) return;

  try {
    const response = await axios.post(`${backendURL}/users/login`, credentials);
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
    const response = await axios.post(`${backendURL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión con correo y contraseña:', error);
    throw error;
  }
};

// Método para obtener el usuario actual en MongoDB
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(
      `${backendURL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario actual:', error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `${backendURL}/users/UserById/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
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
export const createAuthUserWithEmailAndPassword = async (credentials) => {
  if (!credentials) return;

  try {
    const response = await axios.post(`${backendURL}/users`, { credentials });
    return response.data;
  } catch (error) {
    console.error('Error al crear el usuario con correo y contraseña:', error);
    throw error;
  }
};

// Método para cerrar sesión de usuario en MongoDB
export const signOutUSer = async () => {
  try {
    const token = localStorage.getItem('token');
    await axios.post(
      `${backendURL}/users/logout`,
      null, // El cuerpo de la solicitud está vacío
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (error) {
    console.error('Error al cerrar sesión de usuario:', error);
    throw error;
  }
};

// PRODUCTS CRUD
// Método para obtener categorías y documentos desde MongoDB
export const getCategoriesAndDocuments = async () => {
  try {
    const response = await axios.get(`${backendURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías y documentos:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${backendURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const addProduct = async (productDetails) => {
  try {
    const response = await axios.post(`${backendURL}/products`, productDetails);
    return response.data;
  } catch (error) {
    console.error('Error al agregar producto:', error);
    throw error;
  }
};

export const updateProduct = async (id, productDetails) => {
  try {
    const response = await axios.put(
      `${backendURL}/products/${id}`,
      productDetails
    );

    return response.data;
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${backendURL}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { id: id },
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
  }
};


// ORDERS CRUD
export const getOrders = async () => {
  try {
    const response = await axios.get(`${backendURL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener pedidos:', error);
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await axios.delete(`${backendURL}/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar pedido:', error);
    throw error;
  }
}
