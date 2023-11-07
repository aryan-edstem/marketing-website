const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case 'SIGNUP_FAILURE':
        return {
          ...state,
          user: null,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;