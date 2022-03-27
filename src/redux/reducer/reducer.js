import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './authReducer';
import homeReducer from './homeReducer';
import addContact from './addReducer';

const Reducer = combineReducers({
  registerReducer,
  loginReducer,
  homeReducer,
  addContact
});

export default Reducer;
