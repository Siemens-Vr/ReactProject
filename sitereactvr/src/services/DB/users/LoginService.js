import {useState} from "react";
import {get} from "../../axios";
import axios from "axios";
import { storeTokens } from "../../axios";


/**
 * Hook sign up post data.
 * 
 * @typedef useLogin
 * @kind hook
 * 
 * @returns {object}
 */
const useLogin = ( ) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      };
      console.log(formData)

        try {
            const response = await axios.post('http://localhost:5002/api-database/login', formData);
            console.log(response);
            if (response) {
                setIsLoading(false);
                storeTokens(response.data.token, response.data.refreshToken)
            }
          } catch (error) {
            setIsLoading(false);
          }
    };

    return { handleSubmit, isLoading };
};

export default useLogin;