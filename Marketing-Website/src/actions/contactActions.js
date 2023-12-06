// import axios from 'axios';
// export const createContact = (contactData,navigate) => async (dispatch) => {
//   try {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL
//     const response = await axios.post(`${apiUrl}/contact`, contactData);
//     await axios.post(`${apiUrl}/email`, contactData)
//     dispatch({ type: 'CREATE_CONTACT_SUCCESS', payload: response.data });
//     navigate('/success');
//   } catch (error) {
//     dispatch({ type: 'CREATE_CONTACT_FAILURE', error });
//   }
// };

