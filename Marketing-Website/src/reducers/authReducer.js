// const initialState = {
//     user: null,
//     error: null,
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SIGNUP_SUCCESS':
//         return {
//           ...state,
//           user: action.payload,
//           error: null,
//         };
//       case 'SIGNUP_FAILURE':
//         return {
//           ...state,
//           user: null,
//           error: action.error,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.user = null;
        state.error = action.error;
      });
  },
});

export default authSlice.reducer;
