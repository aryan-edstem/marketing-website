const initialState = {
    user: null,
    isAuthenticated:null,
    error: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated:true,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          isAuthenticated:false,
          error: action.error,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
      case 'SET_AUTHENTICATED':
          return {
            ...state,
            isAuthenticated: action.payload,
            user: null,
            error: null,
          };
      default:
        return state;
    }
  };
  
  export default loginReducer;