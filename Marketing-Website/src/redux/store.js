// import { combineReducers } from 'redux';
// import authReducer from '../reducers/authReducer';
// import contactReducer from '../reducers/contactReducer';
// import userReducer from '../reducers/userReducer';
// import dataReducer from '../reducers/featureReducer';
// import loginReducer from '../reducers/loginReducer';
// import wishlistReducer from '../reducers/wishlistReducer';
// import imageReducer from '../reducers/imageReducer';
// import textReducer from '../reducers/textReducer';
// import productReducer from '../reducers/productReducer';


// const rootReducer = combineReducers({
//   auth: authReducer,
//   contact: contactReducer,
//   user: userReducer,
//   data: dataReducer,
//   login: loginReducer,
//   image: imageReducer,
//   wishlist:wishlistReducer,
//   text:textReducer,
//   products:productReducer
// });

// export default rootReducer;

// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "../reducers/productSlice";

// const store = configureStore({
//   reducer:{
//     product:productReducer
//   }
// });

// export default store


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../actions/authSlice";
import contactReducer from "../actions/contactSlice";
import productReducer from "../actions/productSlice";
import descriptionReducer from "../actions/descriptionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    product: productReducer,
    description: descriptionReducer
  },
});

export default store;
