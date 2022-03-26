import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './authReducer';
import homeReducer from './homeReducer';

const Reducer = combineReducers({
  registerReducer,
  loginReducer,
  homeReducer,
});

export default Reducer;
