import axios from 'axios';

export const createContact = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/contact', formData);
    dispatch({ type: 'CREATE_CONTACT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_CONTACT_FAILURE', error });
  }
};

