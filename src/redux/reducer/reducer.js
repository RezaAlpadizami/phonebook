import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './authReducer';

const Reducer = combineReducers({
  registerReducer,
  loginReducer
});

export default Reducer;
