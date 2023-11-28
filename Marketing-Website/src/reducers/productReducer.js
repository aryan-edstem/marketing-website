const initialState = {
    data: null,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          data: null,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;