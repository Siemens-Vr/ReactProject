import {useState} from "react";
import {post} from "../../axios";
import axios from "axios";


/**
 * Hook sign up post data.
 * 
 * @typedef useSignUp
 * @kind hook
 * 
 * @returns {object}
 */
const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = {
        name: e.target.elements.name.value,
        lastName: e.target.elements.lastName.value,
        gender: e.target.elements.gender.value, 
        age: e.target.elements.age.value, 
        company: e.target.elements.company.value,
        password: e.target.elements.password.value,
        email: e.target.elements.email.value,
      };
      console.log(formData)

        try {
            const response = await axios.post('http://localhost:5002/api-database/register', formData);
            if (response) {
                setIsLoading(false);
            }
          } catch (error) {
            setIsLoading(false);
          }
    };

    return { handleSubmit, isLoading };
};

export default useSignUp;