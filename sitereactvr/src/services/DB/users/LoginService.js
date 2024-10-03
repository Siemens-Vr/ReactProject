import { useState } from "react";
import axios from "axios";
import { storeTokens } from "../../axios";

/**
 * Hook for login post data.
 * 
 * @typedef useLogin
 * @kind hook
 * 
 * @returns {object}
 */
const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
  
    try {
      // Correct login URL
      const response = await axios.post('https://api-database-sz4l.onrender.com/api-database/login', formData);
      console.log('Full response:', response); 
      if (response) {
        setIsLoading(false);
        const email = response.data.user.email;
        const userRole = response.data.user.userRole;
        const token = response.data.token;
  
        storeTokens(token, response.data.refreshToken);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('role', userRole);
  
        return { email, userRole };
      
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error logging in:', error);
    }
  };
  
  return { handleSubmit, isLoading };
};

export default useLogin;
