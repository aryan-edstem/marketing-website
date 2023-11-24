import axios from 'axios';
import baseUrl from '../components/BaseUrl';
export const createContact = (contactData,navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/contact`, contactData);
    await axios.post(`${baseUrl}/email`, contactData)
    dispatch({ type: 'CREATE_CONTACT_SUCCESS', payload: response.data });
    navigate('/success');
  } catch (error) {
    dispatch({ type: 'CREATE_CONTACT_FAILURE', error });
  }
};

