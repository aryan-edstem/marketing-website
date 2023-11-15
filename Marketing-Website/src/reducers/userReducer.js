const initialState = {
    username: 'Guest',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_USERNAME':
        return { ...state, username: action.username };
      default:
        return state;
    }
  };
  
  export default userReducer;