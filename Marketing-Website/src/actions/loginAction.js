import axios from 'axios';

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const response = await axios.post(`${apiUrl}/login`, formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    dispatch({ type: 'SET_AUTHENTICATED', payload: true });
    // dispatch({ type: 'LOGOUT'});
    navigate('/products');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', error });
  }
};
