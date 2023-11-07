const initialState = {
    contact: null,
    error: null,
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_CONTACT_SUCCESS':
        return {
          ...state,
          contact: action.payload,
          error: null,
        };
      case 'CREATE_CONTACT_FAILURE':
        return {
          ...state,
          contact: null,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  