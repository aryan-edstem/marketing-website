import axios from 'axios';

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/signup', formData);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
    navigate('/home');
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', error });
  }
};
