const initialState = {
    data: null,
    error: null,
  };
  
  const textReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TEXT_SUCCESS':
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case 'FETCH_TEXT_FAILURE':
        return {
          ...state,
          data: null,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default textReducer;