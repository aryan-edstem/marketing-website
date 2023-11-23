const initialState = {
    loading: false,
    error: null,
    data: null,
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_IMAGE_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload,
        };
      case 'FETCH_IMAGE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: null,
        };
      default:
        return state;
    }
  };
  
  export default imageReducer;
  