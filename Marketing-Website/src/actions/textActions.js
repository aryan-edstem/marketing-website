import axios from 'axios';

export const fetchText = () => async (dispatch) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    try {
    const response = await axios.get(`${apiUrl}/description/short`);
    dispatch({ type: 'FETCH_TEXT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TEXT_FAILURE', error });
  }
};