import axios from 'axios';

// Create an Axios instance with default configurations
const instance = axios.create({
  baseURL: 'http://localhost:5001', // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors can be added here if needed
// instance.interceptors.request.use(...);
// instance.interceptors.response.use(...);

export const get = async (endpoint, params = {}) => {
  try {
    const response = await instance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const post = async (endpoint, data = {}) => {
  try {
    const response = await instance.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const put = async (endpoint, data = {}) => {
  try {
    const response = await instance.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const del = async (endpoint, data = {}) => {
  try {
    const response = await instance.delete(endpoint, { data });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  // Handle error
  console.error('API call failed. ', error);
  throw error;
};