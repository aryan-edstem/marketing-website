// const initialState = {
//     data: null,
//     error: null,
//   };
  
//   const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'FETCH_PRODUCTS_SUCCESS':
//         return {
//           ...state,
//           data: action.payload,
//           error: null,
//         };
//       case 'FETCH_PRODUCTS_FAILURE':
//         return {
//           ...state,
//           data: null,
//           error: action.error,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default productReducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../actions/productsAction';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload; 
      });
  },
});

export default productSlice.reducer;
