import axios from 'axios';

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    dispatch({ type: 'SET_AUTHENTICATED', payload: true });
    // dispatch({ type: 'LOGOUT'});
    navigate('/products');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', error });
  }
};
