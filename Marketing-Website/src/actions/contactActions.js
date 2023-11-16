import axios from 'axios';

export const createContact = (contactData,navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/contact', contactData);
    await axios.post('http://localhost:8080/email', contactData)
    dispatch({ type: 'CREATE_CONTACT_SUCCESS', payload: response.data });
    navigate('/success');
  } catch (error) {
    dispatch({ type: 'CREATE_CONTACT_FAILURE', error });
  }
};

