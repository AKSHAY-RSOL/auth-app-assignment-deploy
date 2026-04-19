import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

const getMessage = (error, fallback) => {
  return error.response?.data?.message || fallback;
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(getMessage(error, 'Login failed'));
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post('/api/auth/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(getMessage(error, 'Signup failed'));
  }
};

export const getMe = async (token) => {
  try {
    const response = await api.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(getMessage(error, 'Could not restore session'));
  }
};
