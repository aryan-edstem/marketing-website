

const initialState = {
  image: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE_SUCCESS':
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
