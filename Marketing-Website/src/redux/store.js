import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import contactReducer from '../reducers/contactReducer';
import userReducer from '../reducers/userReducer';
import dataReducer from '../reducers/featureReducer';
import loginReducer from '../reducers/loginReducer';
import wishlistReducer from '../reducers/wishlistReducer';
import imageReducer from '../reducers/imageReducer';
import textReducer from '../reducers/textReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  user: userReducer,
  data: dataReducer,
  login: loginReducer,
  image: imageReducer,
  wishlist:wishlistReducer,
  text:textReducer
});

export default rootReducer;
