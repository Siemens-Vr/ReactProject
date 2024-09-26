import logout from '../services/DB/users/LogoutService';
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


export function storeTokens(accessToken, refreshToken) {
  // Store tokens securely in session storage
  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('refreshToken', refreshToken);
}

export async function refreshAccessToken() {
  
  const refreshToken = sessionStorage.getItem('refreshToken');

  if (!refreshToken) {
    // Handle missing refresh token (e.g., redirect to login)
    console.error('No refresh token found, please log in again.');
    return;
  }

  try {
    // Make a request to your refresh token endpoint
    const response = await post('/api/refresh', {
      refreshToken: refreshToken,
    });

    // Extract new tokens from the response
    const { accessToken, newRefreshToken } = response.data;

    // Update tokens in session storage
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('refreshToken', newRefreshToken);

    // Return the new access token to be used in further requests
    return accessToken;
  } catch (error) {
    console.error('Failed to refresh access token:', error);
    // Handle token refresh failure (e.g., log out the user)
  }
}


export const get = async (endpoint, params = {}) => {
  let accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await instance.get(endpoint,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
        // Refresh the access token
        accessToken = await refreshAccessToken();

        if (accessToken) {
          // Retry the original request with the new access token
          const retryResponse = await axios.get(endpoint, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        console.log('Retry response:', retryResponse.data);
        }else{
          logout();
        }
    }
  }
};

export const post = async (endpoint, data = {}) => {
  let accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await instance.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data;
  }  catch (error) {
    if (error.response && error.response.status === 401) {
        // Refresh the access token
        accessToken = await refreshAccessToken();

        if (accessToken) {
          // Retry the original request with the new access token
          const retryResponse = await axios.post(endpoint, data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        console.log('Retry response:', retryResponse.data);
        }else{
          logout();
        }
    }
  }
};

export const put = async (endpoint, data = {}) => {
  let accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await instance.put(endpoint, data,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
        // Refresh the access token
        accessToken = await refreshAccessToken();

        if (accessToken) {
          // Retry the original request with the new access token
          const retryResponse = await axios.put(endpoint, data,{
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }
        );
        console.log('Retry response:', retryResponse.data);
        }else{
          logout();
        }
    }
  }
};

export const del = async (endpoint, data = {}) => {
  let accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await instance.delete(endpoint,{ data, 
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
        // Refresh the access token
        accessToken = await refreshAccessToken();

        if (accessToken) {
          // Retry the original request with the new access token
          const retryResponse = await axios.delete(endpoint,{ data, 
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
        console.log('Retry response:', retryResponse.data);
        }else{
          logout();
        }
    }
  }
};


// Fonction de gestion des erreurs
const handleError = (error) => {
  if (error.code === 'ECONNABORTED') {
    console.error('La requête a dépassé le délai d\'attente.');
  } else {
    console.error('Une erreur s\'est produite :', error.message);
  }
};