import axios from 'axios';

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const response = await axios.post(`${apiUrl}/signup`, formData);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
    navigate('/login');
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', error });
  }
};
