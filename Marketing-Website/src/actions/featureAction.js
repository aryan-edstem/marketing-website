// import axios from 'axios';

// export const fetchData = (id) => async (dispatch) => {
//   try {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL
//     const response = await axios.get(`${apiUrl}/description/detailed/${id}`);
//     dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
//   } catch (error) {
//     dispatch({ type: 'FETCH_DATA_FAILURE', error });
//   }
// };