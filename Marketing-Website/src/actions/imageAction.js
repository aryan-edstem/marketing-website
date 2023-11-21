import axios from 'axios';

export const fetchImage = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8080/image`);
    dispatch({ type: 'FETCH_IMAGE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_IMAGE_FAILURE', error });
  }
};