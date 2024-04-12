import axios from 'axios';

export const bakendURL = "https://ecommerce-webapp-backend.onrender.com"

export const fetchUser = async () => {
    try {
        const response = await axios.get("http://localhost:5555/users" || bakendURL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const loginUser = async (credentials) => {
    try {
        /* const storedToken = localStorage.getItem('token');
        if (storedToken) {
            return storedToken;
        } */

        const response = await axios.post("http://localhost:5555/users/login" || bakendURL, credentials);
        localStorage.setItem('token', response.data.token);
        return response.data.token;
    } catch (error) {
        console.log(error.message);
    }
};


export const logoutUser = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No hay token almacenado');
        }
        await axios.post("http://localhost:5555/users/logout" || bakendURL, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        localStorage.removeItem('token');
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
    }
};