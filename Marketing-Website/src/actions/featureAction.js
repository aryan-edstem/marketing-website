import axios from 'axios';

export const fetchData = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8080/description/detailed/${id}`);
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', error });
  }
};