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
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    console.log(apiUrl);
  try {
    const response = await axios.get(`${apiUrl}/image`);
    dispatch(fetchImageSuccess(response.data));
  } catch (error) {
    dispatch(fetchImageFailure(error));
  }
};
