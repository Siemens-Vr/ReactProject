import {useState} from "react";
//import {get} from "../../axios";
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

        try {
            const response = await axios.post('http://localhost:5002/api-database/login', formData);
            if (response) {
                setIsLoading(false);
                const email = response.data.user.email;
                //console.log(email)
                storeTokens(response.data.token, response.data.refreshToken)
                sessionStorage.setItem('email', email);
            }
          } catch (error) {
            setIsLoading(false);
          }
    };

    return { handleSubmit, isLoading };
};

export default useLogin;