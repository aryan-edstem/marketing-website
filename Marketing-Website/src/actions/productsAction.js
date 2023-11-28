import axios from 'axios';

export const fetchProduct = () => async (dispatch) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    try {
    const response = await axios.get(`${apiUrl}/products`);
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error });
  }
};