import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import contactReducer from '../reducers/contactReducer';
import userReducer from '../reducers/userReducer';
import dataReducer from '../reducers/featureReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  user: userReducer,
  data: dataReducer,
});

export default rootReducer;
