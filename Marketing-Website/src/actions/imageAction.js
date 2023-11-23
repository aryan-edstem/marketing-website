import axios from 'axios';

export const fetchImageSuccess = (data) => ({
  type: 'FETCH_IMAGE_SUCCESS',
  payload: data,
});

export const fetchImageFailure = (error) => ({
  type: 'FETCH_IMAGE_FAILURE',
  payload: error,
});

export const fetchImage = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8080/image');
    dispatch(fetchImageSuccess(response.data));
  } catch (error) {
    dispatch(fetchImageFailure(error));
  }
};
